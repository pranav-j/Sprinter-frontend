import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Message {
    messageContent: string;
    senderId?: string;
    receiverId?: string;
    projectId?: string;
    projectGroupId?: string;
    sentAt?: string | Date;
};

interface ChatState {
    messages: Message[];
};

const initialState: ChatState = {
    messages: []
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addNewMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        },
        addOldMessages: (state, action: PayloadAction<Message[]>) => {
            const existingMessageIds = new Set(state.messages.map(message => message.sentAt)); // Use a unique identifier
            const newMessages = action.payload.filter(message => !existingMessageIds.has(message.sentAt)); // Filter duplicates
            state.messages = [...newMessages, ...state.messages]; // Add only new messages
        },
        
        // addOldMessages: (state, action: PayloadAction<Message[]>) => {
        //     state.messages = [...action.payload, ...state.messages];
        // },
    }
});

export const { addNewMessage, addOldMessages } = chatSlice.actions;
export default chatSlice.reducer;