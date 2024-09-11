import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Attachment {
    title: string;
    link: string;
    size: number;
    metadata: string;
}

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
};

interface ItemsSlice {
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    items: Itemm[];
    error: string | null;
};

const initialState: ItemsSlice = {
    status: 'idle',
    items: [],
    error: null,
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
  

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Itemm[]>) => {
                state.status = 'fulfilled';
                state.items = action.payload;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || 'Failed to fetch items';
            })
            .addCase(createItem.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
    },
});

export default itemsSlice.reducer;