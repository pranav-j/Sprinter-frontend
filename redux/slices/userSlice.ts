import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
interface User {
    _id: string;
    firstName: string;
    lastName?: string;
    profilePic?: string;
    role: string;
};

interface UserState {
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    user: User | null;
    loginError: string | null;
    userExistsError: string | null;
};

const initialState: UserState = {
    status: 'idle',
    user: null,
    loginError: null,
    userExistsError: null,
};

export const login = createAsyncThunk<User, { email: string, password: string }>('user/login', async({email, password}) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, { email, password }, {withCredentials: true});
    return response.data.user;
});

export const OAuth = createAsyncThunk<User, any, { rejectValue: string }>(
    'user/OAuth',
    async (OAuthresponse, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/googleOAuth`, OAuthresponse, { withCredentials: true });
        
        const { user, tokenn } = response.data;
  
        return user;
      } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 409) {
            return rejectWithValue('User exists. Please sign in with email and password');
          } else {
            return rejectWithValue('Error from server: ' + error.response.data.message);
          }
        } else {
          return rejectWithValue('Error sending token: ' + error.message);
        }
      }
    }
);  

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.loginError = '';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'rejected';
        state.loginError = action.error.message as string;
      })


      .addCase(OAuth.pending, (state) => {
        state.status = 'pending';
        state.userExistsError = null;
        state.loginError = null;
      })
      .addCase(OAuth.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.userExistsError = null;
        state.loginError = null;
        state.user = action.payload;
      })
      .addCase(OAuth.rejected, (state, action) => {
        state.status = 'rejected';
        state.userExistsError = action.error.message as string;
        state.user = null;
      });
  }
})

export default userSlice.reducer;