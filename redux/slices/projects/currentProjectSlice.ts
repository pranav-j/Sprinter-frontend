import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentProjectSlice {
    currentProjectId: string
};

const initialState: CurrentProjectSlice = {
    currentProjectId: ""
};

const currentProjectSlice = createSlice({
    name: 'currentProjectId',
    initialState,
    reducers: {
        setCurrentProjectId: (state, action: PayloadAction<string>) => {
            state.currentProjectId = action.payload;
        }
    }
});

export const { setCurrentProjectId } = currentProjectSlice.actions;
export default currentProjectSlice.reducer;