import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Member {
  _id: string;
  email: string;
  profilePic: string;
  verified: boolean;
  role: string;
  isSuspended: boolean;
  addedBy: string;
  firstName: string;
  lastName: string;
  projects: string[];
}

interface MembersState {
  members: Member[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MembersState = {
  members: [],
  status: 'idle',
  error: null,
};

export const fetchMembers = createAsyncThunk<Member[], string>(
  'members/fetchMembers',
  async (projectId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3030/api/getMembers?projectId=${projectId}`, { withCredentials: true });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch members');
    }
  }
);

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMembers.fulfilled, (state, action: PayloadAction<Member[]>) => {
        state.status = 'succeeded';
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default membersSlice.reducer;
