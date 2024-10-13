import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';

import { Socket } from "socket.io-client"; // import Socket type
import { addNewMessage, addOldMessages } from '@/redux/slices/chat/chatSlice';

interface ChatProps {
    socket: Socket;
}

// const socket = io('${process.env.NEXT_PUBLIC_BASE_URL}', {
//     withCredentials: true,
// });

const Chat = ({ socket }: ChatProps) => {
    const members = useAppSelector((state) => state.MembersReducer.members);
    const projects = useAppSelector((state) => state.projectsReducer.projects);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);
    const currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);
    const currentProject = projects.find((project) => project._id ===   currentProjectId) || null;

    const dispatch = useAppDispatch();

    interface Message {
        messageContent: string;
        senderId?: string;
        receiverId?: string;
        projectId?: string;
        projectGroupId?: string;
        sentAt?: string | Date;
    }

    const messagez = useAppSelector((state) => state.chatReducer.messages);

    const [messageTo, setMessageTo] = useState('');
    const [message, setMessage] = useState('');

    // const messagesToShow = messages.filter((message) => message.senderId === messageTo || message.receiverId === messageTo);
    let messagesToShow;

    if(messageTo === currentProjectId) {
        messagesToShow = messagez.filter((message) => message.projectGroupId === messageTo || message.receiverId === messageTo);
    } else {
        messagesToShow = messagez.filter((message) => (message.senderId === messageTo || message.receiverId === messageTo) && !message.projectGroupId);
    }

    const handleOldMessage = (oldMessages: Message[]) => {
        // setMessages((prevMessages) => [...prevMessages, ...oldMessages]);
        dispatch(addOldMessages(oldMessages));
    };
    
    
    useEffect(() => {
        if(messageTo === currentProjectId) {
            socket.emit('loadOldMessages', { projectGroupId: currentProjectId});
        } else {
            socket.emit('loadOldMessages', { senderId: messageTo})
        }
        socket.on('loadOldMessages', handleOldMessage);
        return () => {
            socket.off('loadOldMessages', handleOldMessage);
        };
    }, [messageTo]);

    const sendMessage = () => {
        if(message !== '') {
            const messageWithMetadata = { messageContent: message, receiverId: messageTo, senderId: loggedInUser?._id, sentAt: new Date().toISOString() };
            if(messageTo === currentProjectId) {
                console.log("hehehehhe");
                socket.emit('sentMessageToGroup', { content: message, projectId: currentProjectId, messageTo });
                dispatch(addNewMessage(messageWithMetadata));
                setMessage('');
            } else {
                socket.emit('chatMessage', { content: message, projectId: currentProjectId, messageTo });
                dispatch(addNewMessage(messageWithMetadata));
                setMessage('');
            }
        }
    };

    return (
        <div className="flex h-full rounded-lg">
            {/* Sidebar for members and group */}
            <div className="w-1/4 bg-gray-200 p-4 overflow-auto rounded-l-lg">
            <h1>PROJECTS</h1>
            <div 
                key={currentProject?._id} 
                onClick={() => setMessageTo(currentProject?._id || '')} 
                className={`flex items-center p-2 cursor-pointer ${messageTo === currentProject?._id && 'bg-green-300 rounded'}`}
            >
                <Image 
                    className="w-10 h-10 rounded-full" 
                    src="https://robohash.org/111.235.68.162.png" 
                    alt={currentProject?.title || "Project title"} 
                    width={40} 
                    height={40} 
                />
                <span className="ml-2">{currentProject?.title}</span>
            </div>
            <h1>MEMBERS</h1>
            {members.map((member) => (loggedInUser?._id !== member._id &&
                <div 
                    key={member._id} 
                    onClick={() => setMessageTo(member._id)} 
                    className={`flex items-center p-2 cursor-pointer ${messageTo === member._id && 'bg-green-300 rounded'}`}
                >
                    <Image 
                        className="w-10 h-10 rounded-full" 
                        src={member.profilePic || "https://robohash.org/111.235.68.162.png"} 
                        alt={member.firstName} 
                        width={40} 
                        height={40} 
                    />
                    <span className="ml-2">{member.firstName} {member.lastName}</span>
                </div>
            ))}
            </div>


            {/* Chat Area */}
            <div className="w-3/4 bg-white p-4 flex flex-col justify-between rounded-r-lg">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-2 bg-gray-50">
                    {/* Chat bubbles */}
                    {messagesToShow.map((message, idx) => {    
                            const sender = members.find((member) => member._id === message.senderId)                
                            return(                               
                                <div className={`flex flex-col mb-2 ${message.senderId === loggedInUser?._id ? 'items-end' : 'items-start'}`} key={idx}>
                                    {loggedInUser?._id !== message.senderId &&
                                        <small className="text-sm font-semibold text-gray-700">{sender?.firstName} {sender?.lastName}</small>
                                    }                                    
                                    <div className={`bg-blue-200 p-2 rounded-lg flex ${message.senderId === loggedInUser?._id ? 'justify-end' : 'justify-start'} items-center`}>
                                        <div>{message.messageContent}</div>
                                        <span className="text-xs text-gray-500 ml-2 self-end">
                                            {message.sentAt instanceof Date ? message.sentAt.toLocaleString() : message.sentAt}
                                        </span>
                                    </div>
                                </div>
                            );
                            
                        })
                    }
                </div>

                {/* Input field */}
                <div className="flex items-center border-t p-2">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." className="flex-grow p-2 border rounded-lg"/>
                    <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
