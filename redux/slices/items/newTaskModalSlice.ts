import { createSlice } from "@reduxjs/toolkit";

interface NewTaskSlice {
    isNewTaskModalOpen: boolean
};

const initialState: NewTaskSlice = {
    isNewTaskModalOpen: false
};

const newTaskSlice = createSlice({
    name:'newTask',
    initialState,
    reducers: {
        setIsNewTaskModalOpen: (state) => {
            state.isNewTaskModalOpen = !state.isNewTaskModalOpen
        },
    },
});

export const { setIsNewTaskModalOpen } = newTaskSlice.actions;
export default newTaskSlice.reducer;