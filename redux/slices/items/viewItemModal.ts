import { createSlice } from "@reduxjs/toolkit";

interface ViewItemSlice {
    currentItemId: string | null;
}

const initialState: ViewItemSlice = {
    currentItemId: null
}

const viewItemSlice = createSlice({
    name: 'viewItem',
    initialState,
    reducers: {
        setCurrentItemId: (state, action) => {
            state.currentItemId = action.payload;
        },
        resetCurrentItemId: (state) => {
            state.currentItemId = null;
        }
    },
});

export const { setCurrentItemId, resetCurrentItemId } = viewItemSlice.actions;
export default viewItemSlice.reducer;