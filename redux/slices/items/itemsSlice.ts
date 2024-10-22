import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

 
export interface Attachment {
    title: string;
    link: string;
    size: number;
    metadata: string;
};

export interface Comment {
    _id: string;
    commentedBy: string;
    content: string;
    commentedAt: string;
};

export interface ActivityLog {
    changedBy: string;
    change: string;
    changedAt: string;
};

export interface Itemm {
    _id: string;
    projectId: string;
    sprintId?: string;
    createdBy?: string;
    title: string;
    description: string;
    type: string;
    status: string;
    start: string;
    end: string;
    createdAt: string;
    updatedAt: string;
    order?: number;
    assignee?: string;
    attachments?: Attachment[];
    comments?: Comment[];
    activityLog?: ActivityLog[];
};

interface ItemsSlice {
    fetchStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    updateItemStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    deleteItemStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    moveItemStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    changeItemStatusStatus : 'idle' | 'pending' | 'fulfilled' | 'rejected';
    items: Itemm[];
    errorFetchingItems: string | null;
    errorCreatingItem: string | null;
    errorUpdatingItem: string | null;
    errorDeletingItem: string | null;
    errorCommenting: string | null;
    errorUpdatingItemStatus: string | null;
};

const initialState: ItemsSlice = {
    fetchStatus: 'idle',
    updateItemStatus: 'idle',
    deleteItemStatus: 'idle',
    moveItemStatus: 'idle',
    changeItemStatusStatus: 'idle',
    items: [],
    errorFetchingItems: null,
    errorCreatingItem: null,
    errorUpdatingItem: null,
    errorDeletingItem: null,
    errorCommenting: null,
    errorUpdatingItemStatus: null,
};

export const fetchItems = createAsyncThunk<Itemm[], string>('items/fetchItems', async(currentProjectId: string) => {
    const response =  await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items?projectId=${currentProjectId}`, { withCredentials: true });
    return response.data.items;
});

export const createItem = createAsyncThunk<Itemm, FormData>(
    'items/createItem',
    async (formData) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/item`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      return response.data;
    }
);

export const updateItem = createAsyncThunk<Itemm, { itemId: string; updatedData: Partial<Itemm> }>(
    'items/updateItem',
    async({itemId, updatedData}) => {
        const response = await axios.put(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/item/${itemId}`,
            updatedData,
            { withCredentials: true }
          );
          return response.data;
    }
);

export const changeItemStatus = createAsyncThunk(
    'item/changeItemStatus',
    async({itemId, statusId}: { itemId: string; statusId: number }) => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/changeItemStatus`,
            {itemId, statusId},
            { withCredentials: true }
        );
        return response.data;
    }
)

export const addComment = createAsyncThunk(
    'items/addComment',
    async({ itemId, comment }: { itemId: string, comment: string }) => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/comment`,
            { comment, itemId },
            { withCredentials: true }
        );
        return response.data;
    }
);

export const deleteItem = createAsyncThunk<string, string>(
    'items/deleteItem',
    async(itemId: string) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/item/${itemId}`, { withCredentials: true });
        return itemId;
    }
);

export const moveItem = createAsyncThunk(
    'items/moveItem',
    async ({ insertAt, draggableItemId, draggableItemSprintId, moveToSprintId, moveItemToBacklog, currentProjectId }: {
      insertAt?: number,
      draggableItemId?: string | null,
      draggableItemSprintId?: string | null,
      moveToSprintId?: string | null,
      moveItemToBacklog?: boolean,
      currentProjectId?: string,
    }) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/moveItem`,
        {
          insertAt,
          itemId: draggableItemId,
          itemSprintId: draggableItemSprintId,
          moveToSprintId,
          moveItemToBacklog,
          projectId: currentProjectId,
        },
        { withCredentials: true }
      );
      return response.data;
    }
);

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        resetUpdateItemStatus: (state) => {
            state.updateItemStatus = 'idle';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.fetchStatus = 'pending';
            })
            .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Itemm[]>) => {
                state.fetchStatus = 'fulfilled';
                state.items = action.payload;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.fetchStatus = 'rejected';
                state.errorFetchingItems = action.error.message || 'Failed to fetch items';
            })
            .addCase(createItem.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(createItem.rejected, (state, action) => {
                state.errorCreatingItem = action.error.message || 'Failed to create item';
            })
            .addCase(updateItem.pending, (state) => {
                state.updateItemStatus = 'pending';
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                const index = state.items.findIndex((item) => item._id === action.payload._id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
                state.updateItemStatus = 'fulfilled';
            })
            .addCase(updateItem.rejected, (state, action) => {
                state.errorUpdatingItem = action.error.message || 'Failed to updating item';
                state.updateItemStatus = 'rejected';
            })
            .addCase(addComment.fulfilled, (state, action) => {
                const index = state.items.findIndex((item) => item._id === action.payload._id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase((deleteItem.pending), (state) => {
                state.deleteItemStatus = 'pending';
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item._id !== action.payload);
                state.deleteItemStatus = 'fulfilled';
            })
            .addCase(deleteItem.rejected, (state, action) => {
                state.deleteItemStatus = 'rejected';
                state.errorDeletingItem = action.error.message || 'Failed to delete item';
            })
            .addCase(moveItem.pending, (state) => {
                state.moveItemStatus = 'pending';
            })
            .addCase(moveItem.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item._id === action.payload.updatedItem._id);
                if(index !== -1) {
                    state.items[index] = action.payload.updatedItem
                }
                action.payload.updatedOrder.forEach((itemOrder: any) => {
                    const index = state.items.findIndex(item => item._id === itemOrder._id);
                    if(index !== -1) {
                        state.items[index].order = itemOrder.order;
                    }
                });
                state.moveItemStatus = 'fulfilled';

                // setTimeout(() => {
                //     state.moveItemStatus = 'idle';
                // }, 1000);
            })
            .addCase(moveItem.rejected, (state) => {
                state.moveItemStatus = 'rejected';
            })
            .addCase(changeItemStatus.pending, (state) => {
                state.changeItemStatusStatus = 'pending';
            })
            .addCase(changeItemStatus.fulfilled, (state, action) => {
                const index = state.items.findIndex((item) => item._id === action.payload.updatedItem._id);
                if(index !== -1) {
                    state.items[index] = action.payload.updatedItem;
                }
                state.changeItemStatusStatus = 'fulfilled';
            })
            .addCase(changeItemStatus.rejected, (state, action) => {
                state.changeItemStatusStatus = 'rejected';
                state.errorUpdatingItemStatus = action.error.message || 'Failed to change item status';
            })
    },
});

export default itemsSlice.reducer;
export const { resetUpdateItemStatus } = itemsSlice.actions;