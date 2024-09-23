import { createSlice } from "@reduxjs/toolkit";

interface DeleteItemSlice {
    deleteItemId: string | null;
}

const initialState: DeleteItemSlice = {
    deleteItemId: null
}

const deleteItemSlice = createSlice({
    name: 'deleteItem',
    initialState,
    reducers: {
        setDeleteItemId: (state, action) => {
            state.deleteItemId = action.payload;
        },
        resetDeleteItemId: (state) => {
            state.deleteItemId = null;
        }
    },
});

export const { setDeleteItemId, resetDeleteItemId } = deleteItemSlice.actions;
export default deleteItemSlice.reducer;