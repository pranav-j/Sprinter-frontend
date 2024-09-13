import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    profilePic: string;
    role: string;
};

interface UserState {
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    user: User | null;
    error: string | null;
};

const initialState: UserState = {
    status: 'idle',
    user: null,
    error: null
};

export const login = createAsyncThunk<User, { email: string, password: string }>('user/login', async({email, password}) => {
    const response = await axios.post("http://localhost:3030/api/login", { email, password }, {withCredentials: true});
    return response.data.user;
})

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
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message as string;
            })
    }
})

export default userSlice.reducer;