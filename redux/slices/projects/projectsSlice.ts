import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 
interface Project {
    _id: string;
    title: string;
    description: string;
    createdBy: string;
    members: string[];
    createdAt: string;
    updatedAt: string;
    startDate: string;
    endDate: string;
};

interface ProjectsSlice {
    status: string;
    projects: Project[];
};

const initialState: ProjectsSlice = {
    status: 'idle',
    projects: []
};

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async() => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project`, { withCredentials: true });
    return response.data.projects;
});

export const createProject = createAsyncThunk('projects/create', async(project: { title: string, description: string, startDate: string, endDate: string }) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project`, project, { withCredentials: true })
    console.log("response.data.......", response.data);    
    return response.data
})

const productsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.projects = action.payload;
            })
            .addCase(fetchProjects.rejected, (state) => {
                state.status = 'rejected';
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.projects.push(action.payload);
            })
    }
});

export const {  } = productsSlice.actions;
export default productsSlice.reducer;