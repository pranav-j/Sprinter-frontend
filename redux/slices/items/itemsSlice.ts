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
    commentedBy: string; // User ID
    content: string;
    commentedAt: string;
};

export interface Itemm {
    _id: string;
    projectId: string;
    sprintId?: string;
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
};

interface ItemsSlice {
    fetchStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    updateItemStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    items: Itemm[];
    errorFetchingItems: string | null;
    errorCreatingItem: string | null;
    errorUpdatingItem: string | null;
    errorCommenting: string | null;
};

const initialState: ItemsSlice = {
    fetchStatus: 'idle',
    updateItemStatus: 'idle',
    items: [],
    errorFetchingItems: null,
    errorCreatingItem: null,
    errorUpdatingItem: null,
    errorCommenting: null,
};

export const fetchItems = createAsyncThunk<Itemm[], string>('items/fetchItems', async(currentProjectId: string) => {
    const response =  await axios.get(`http://localhost:3030/api/items?projectId=${currentProjectId}`, { withCredentials: true });
    return response.data.items;
});

// export const createItem = createAsyncThunk<Itemm, Omit<Itemm, '_id' | 'createdAt' | 'updatedAt' | 'sprintId' | 'status' | 'order' >>('items/createItem', async(newItem) => {
//     const response = await axios.post("http://localhost:3030/api/item", newItem, { withCredentials: true });
//     return response.data;
// });

export const createItem = createAsyncThunk<Itemm, FormData>(
    'items/createItem',
    async (formData) => {
      const response = await axios.post(
        'http://localhost:3030/api/item',
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
            `http://localhost:3030/api/item/${itemId}`,
            updatedData,
            { withCredentials: true }
          );
          return response.data;
    }
);

export const addComment = createAsyncThunk(
    'items/addComment',
    async({ itemId, comment }: { itemId: string, comment: string }) => {
        const response = await axios.post(
            `http://localhost:3030/api/comment/${itemId}`,
            { comment },
            { withCredentials: true }
        );
        return response.data;
    }
)

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
    },
});

export default itemsSlice.reducer;
export const { resetUpdateItemStatus } = itemsSlice.actions;