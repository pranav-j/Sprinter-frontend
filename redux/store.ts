import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

import sidebarReducer from "./slices/sidebarSlice";
import tabReducer from "./slices/tabSlice";
// import loggedInReducer from "./slices/loggedinSlice";
import userReducer from "./slices/userSlice"
import newProjectModelOpenReducer from "./slices/projects/newProjectModalSlice";
import newTaskModelOpenReducer from "./slices/items/newTaskModalSlice";
import newSprintModalOpenReducer from "./slices/sprints/newSprintModalSlice";
import projectsReducer from "./slices/projects/projectsSlice"
import currentProjectIdReducer from "./slices/projects/currentProjectSlice";
import itemsReducer from "./slices/items/itemsSlice";
import sprintsReducer from "./slices/sprints/sprintsSlice";
import draggableItemReducer from "./slices/drag/draggedItemId";
import draggableItemSprintReducer from "./slices/drag/draggedItemSprintId"
import MembersReducer from "./slices/membersSlice";
import ViewItemReducer from "./slices/items/viewItemModal";
import deleteItemReducer from "./slices/items/deleteItemIdSlice";
import chatReducer from "./slices/chat/chatSlice"

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    sidebarReducer,
    tabReducer,
    // loggedInReducer,
    userReducer,
    newProjectModelOpenReducer,
    newTaskModelOpenReducer,
    projectsReducer,
    currentProjectIdReducer,
    itemsReducer,
    newSprintModalOpenReducer,
    sprintsReducer,
    draggableItemReducer,
    draggableItemSprintReducer,
    MembersReducer,
    ViewItemReducer,
    deleteItemReducer,
    chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;