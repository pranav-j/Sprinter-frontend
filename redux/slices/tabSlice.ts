import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TabSlice {
    selectedTab: string;
};

const initialState: TabSlice = {
    selectedTab: "Backlogs",
};

const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        setTab: (state, action: PayloadAction<string>) => {
            state.selectedTab = action.payload;
        }
    }
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;