import { createSlice } from "@reduxjs/toolkit";

interface NewSprintSlice {
    isNewSprintModalOpen: boolean
};

const initialState: NewSprintSlice = {
    isNewSprintModalOpen: false
};

const newSprintSlice = createSlice({
    name: 'newSprint',
    initialState,
    reducers: {
        setIsNewSprintModalOpen: (state) => {
            state.isNewSprintModalOpen = !state.isNewSprintModalOpen
        }
    }
});

export const { setIsNewSprintModalOpen } = newSprintSlice.actions;
export default newSprintSlice.reducer;