import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DraggedItem {
    dreggedItemId: string | null;
};

const initialState: DraggedItem = {
    dreggedItemId: null
}

const draggableItem = createSlice({
    name: 'draggableItem',
    initialState,
    reducers: {
        setDraggableItemId: (state, action: PayloadAction<string | null>) => {
            state.dreggedItemId = action.payload;
        },
        setDraggableItemIdNull: (state) => {
            state.dreggedItemId = null;
        }
    }
})

export const { setDraggableItemId, setDraggableItemIdNull } = draggableItem.actions;
export default draggableItem.reducer;