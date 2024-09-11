import { createSlice } from "@reduxjs/toolkit";

interface NewProjectSlice {
    isNewProjectModalOpen: boolean;
}

const initialState: NewProjectSlice = {
    isNewProjectModalOpen: false
}

const newProjectSlice = createSlice({
    name: 'newProject',
    initialState,
    reducers: {
        setIsNewProjectModalOpen: (state) => {
            state.isNewProjectModalOpen = !state.isNewProjectModalOpen
        },
    },
});

export const { setIsNewProjectModalOpen } = newProjectSlice.actions;
export default newProjectSlice.reducer;