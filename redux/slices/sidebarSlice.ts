import { createSlice } from "@reduxjs/toolkit";

interface SidebarSlice {
    isCollapsed: boolean;
}

const initialState: SidebarSlice = {
    isCollapsed: false,
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isCollapsed = !state.isCollapsed;
        },
    },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;