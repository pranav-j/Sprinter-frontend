import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DraggedItemSprint {
    draggedItemSprintId: string | null;
};

const initialState: DraggedItemSprint = {
    draggedItemSprintId: null
};

const draggedItemSprint = createSlice({
    name: 'draggedItemSprint',
    initialState,
    reducers: {
        setDraggableItemSprintId: (state, action: PayloadAction<string | null>) => {
            state.draggedItemSprintId = action.payload;
        },
        setDraggableItemSprintIdNull: (state) => {
            state.draggedItemSprintId = null;
        }
    }
});

export const { setDraggableItemSprintId, setDraggableItemSprintIdNull } = draggedItemSprint.actions
export default draggedItemSprint.reducer;