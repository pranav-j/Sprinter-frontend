import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

 
export interface Sprint {
    _id: string;
    projectId: string;
    sprintName: string;
    createdBy: string;
    durationInWeeks: number;
    description: string;
    startedOn?: string;
    endedOn?: string;
    createdAt: string;
    updatedAt: string;
};

interface SprintsSlice {
    fetchSprintsStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    startSprintsstatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    endSprintsstatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    sprints: Sprint[];
    error: string | null;
}

const initialState: SprintsSlice = {
    fetchSprintsStatus: 'idle',
    startSprintsstatus: 'idle',
    endSprintsstatus: 'idle',
    sprints: [],
    error: null,
}

export const fetchSprints = createAsyncThunk<Sprint[], string>('sprints/fetchSprints', async(currentProjectId: string) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sprints?projectId=${currentProjectId}`, { withCredentials: true });
    // console.log('Sprints........', response.data.sprints);    
    return response.data.sprints;
});

export const createSprint = createAsyncThunk<Sprint, Omit<Sprint, '_id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'startedOn' >>('sprints/createSprint', async(newSprint) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sprint`, newSprint, { withCredentials: true })
    return response.data;
});

export const startSprint = createAsyncThunk(
    'sprints/startSprint',
    async(sprintId: string) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/startSprint`, { sprintId }, { withCredentials: true });
        return response.data;
    }
);

export const endSprint = createAsyncThunk(
    'sprints/endSprint',
    async(sprintId: string) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/endSprint`, { sprintId }, { withCredentials: true });
        return response.data;
    }
);

const sprintsSlice = createSlice({
    name: 'sprints',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSprints.pending, (state) => {
                state.fetchSprintsStatus = 'pending';
            })
            .addCase(fetchSprints.fulfilled, (state, action: PayloadAction<Sprint[]>) => {
                state.fetchSprintsStatus = 'fulfilled';
                state.sprints = action.payload;
            })
            .addCase(fetchSprints.rejected, (state, action) => {
                state.fetchSprintsStatus = 'rejected';
                state.error = action.error.message || 'Failed to fetch sprints';
            })
            .addCase(createSprint.fulfilled, (state, action) => {
                state.sprints.push(action.payload)
            })
            .addCase(startSprint.pending, (state) => {
                state.startSprintsstatus = 'pending';
            })
            .addCase(startSprint.fulfilled, (state, action) => {
                const index = state.sprints.findIndex((sprint) => sprint._id === action.payload.sprint._id);
                if(index !== -1) {
                    state.sprints[index] = action.payload.sprint;
                }
                state.startSprintsstatus = 'fulfilled';
            })
            .addCase(startSprint.rejected, (state) => {
                state.startSprintsstatus = 'rejected';
            })
            .addCase(endSprint.pending, (state) => {
                state.endSprintsstatus = 'pending';
            })
            .addCase(endSprint.fulfilled, (state, action) => {
                const index = state.sprints.findIndex((sprint) => sprint._id === action.payload.sprint._id);
                if(index !== -1) {
                    state.sprints[index] = action.payload.sprint;
                }
                state.endSprintsstatus = 'fulfilled';
            })
            .addCase(endSprint.rejected, (state) => {
                state.endSprintsstatus = 'rejected';
            })
    }
});

export default sprintsSlice.reducer;