import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAppSelector } from '@/redux/hooks';

const socket = io('http://localhost:3030', {
    withCredentials: true,
});

const Chat = () => {
    const members = useAppSelector((state) => state.MembersReducer.members);
    const projects = useAppSelector((state) => state.projectsReducer.projects);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);
    const currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);
    const currentProject = projects.find((project) => project._id ===   currentProjectId) || null;

    interface Message {
        messageContent: string;
        senderId?: string;
        receiverId?: string;
        projectId?: string;
        projectGroupId?: string;
        sentAt?: string
    }

    const [messageTo, setMessageTo] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState('');

    const messagesToShow = messages.filter((message) => message.senderId === messageTo);

    useEffect(() => {
        socket.on('message', (newMessage) => {
            // setMessages((prevMessages) => [...prevMessages, newMessage]);
            console.log("newMessage.........", newMessage);
            
        });
    }, []);

    useEffect(() => {
        socket.on('private_message', ({ messageContent, senderId, sentAt }) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { messageContent, senderId, sentAt }
            ]);
            console.log("messages........", messages);
        });

        socket.emit('joinProject', { projectId: currentProjectId });

        socket.on('receiveMessageFromGroup', ({ messageContent, senderId, sentAt }) => {
            console.log("Message received in GROUP.............", messageContent);
            
        })
    }, []);

    const sendMessage = () => {
        if(messageTo === currentProjectId) {
            console.log("hehehehhe");
            socket.emit('sentMessageToGroup', { content: message, projectId: currentProjectId, messageTo });
            setMessage('');
        } else {
            socket.emit('chatMessage', { content: message, projectId: currentProjectId, messageTo });
            setMessage('');
        }
        // socket.emit('chatMessage', { content: message, projectId: currentProjectId, messageTo });
        // setMessage('');
    };

    return (
        <div className="flex h-full">
            {/* Sidebar for members and group */}
            <div className="w-1/4 bg-gray-200 p-4 overflow-auto">
                <h1>PROJECTS</h1>
                <div key={currentProject?._id} onClick={() => setMessageTo(currentProject?._id || '')} className={`flex items-center p-2 cursor-pointer ${messageTo === currentProject?._id && 'bg-green-300 rounded'}`}>
                    <img className="w-10 h-10 rounded-full" src={"https://robohash.org/111.235.68.162.png"} alt={currentProject?.title} />
                    <span className="ml-2">{currentProject?.title}</span>
                </div>
                <h1>MEMBERS</h1>
                {members.map((member) => (loggedInUser?._id !== member._id &&
                    <div key={member._id} onClick={() => setMessageTo(member._id)} className={`flex items-center p-2 cursor-pointer ${messageTo === member._id && 'bg-green-300 rounded'}`}>
                        <img className="w-10 h-10 rounded-full" src={member.profilePic || "https://robohash.org/111.235.68.162.png"} alt={member.firstName} />
                        <span className="ml-2">{member.firstName} {member.lastName}</span>
                    </div>
                ))}
            </div>

            {/* Chat Area */}
            <div className="w-3/4 bg-white p-4 flex flex-col justify-between">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-2 bg-gray-50">
                    {/* Chat bubbles */}
                    {messagesToShow.map((message, idx) => (
                        <div className="flex mb-2" key = {idx}>
                            <div className="bg-blue-200 p-2 rounded-lg">{message.messageContent}</div>
                            <span className="text-xs text-gray-500 ml-2 self-end">{message.sentAt}</span>
                        </div>
                    ))}

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
