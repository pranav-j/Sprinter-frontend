"use client"

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setIsNewTaskModalOpen } from "@/redux/slices/items/newTaskModalSlice";
import { setIsNewSprintModalOpen } from "@/redux/slices/sprints/newSprintModalSlice";
import { fetchItems } from "@/redux/slices/items/itemsSlice";
import { fetchSprints } from "@/redux/slices/sprints/sprintsSlice";
import { Message, addNewMessage } from "@/redux/slices/chat/chatSlice";
import { MdAdd } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";import Item from "./subComponents/item";
import SprintCard from "./subComponents/sprintCard";
import MemberCard from "./subComponents/memberCard";
import Reports from "./subComponents/report";
import Feed from "./subComponents/feed";
import Chat from "./subComponents/chat";
import Sprint from "./subComponents/sprint";
import DropArea from "./subComponents/dropArea";
import { useEffect, useState } from "react";
import axios from "axios";
import { io } from 'socket.io-client';
import { resetDeleteItemId } from "@/redux/slices/items/deleteItemIdSlice";

const socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
    withCredentials: true,
});

const TabDetails = () => {
    const selectedTab = useAppSelector((state) => state.tabReducer.selectedTab);
    const currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);
    const members = useAppSelector((state) => state.MembersReducer.members);
    const deleteItemId =useAppSelector((state) => state.deleteItemReducer.deleteItemId);
    const deleteItemStatus = useAppSelector((state) =>state.itemsReducer.deleteItemStatus);
    const dispatch = useAppDispatch();

    const sprints = useAppSelector((state) => state.sprintsReducer.sprints);
    const unstartedSprints = sprints.filter((sprint) => !sprint.startedOn);
    // const ongoingSprints = sprints.filter((sprint) => sprint.startedOn);

    const [emails, setEmails] = useState([""]);
    const [reverseOrder, setReverseOrder] = useState<boolean>(false);
    // const [selectedSprint, setSelectedSprint] = useState<string | null>(null);

    // if(!selectedSprint && ongoingSprints.length > 0) {
    //     setSelectedSprint(ongoingSprints[0]._id);
    // };

    const handleEmailChange = (index: number, value: string) => {
      const newEmails = [...emails];
      newEmails[index] = value;
      setEmails(newEmails);
    };
  
    const handleAddField = () => {
      setEmails([...emails, ""]);
    };
  
    const handleRemoveField = (index: number) => {
      const newEmails = emails.filter((_, i) => i !== index);
      setEmails(newEmails);
    };

    const handleSendInvites = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/addMembers`, { emails, currentProjectId }, { withCredentials: true });
    
            if (response.status === 200) {
                // Handle successful response
                alert("Invites sent successfully!");
                setEmails([""]);
            } else {
                // Handle errors
                alert("Failed to send invites. Please try again.");
            }
        } catch (error) {
          console.error("Error sending invites:", error);
          alert("Error sending invites. Please try again.");
        }
    };

    // SETTING UP SOCKET--------------------------------------------------------------------------------

    const handleIncomingMessage = (message: Message) => {
        console.log("NEW MESSAGE kitty=========> ", message);
        dispatch(addNewMessage(message))
    };

    useEffect(() => { 
        socket.on('private_message', handleIncomingMessage);
        socket.on('receiveMessageFromGroup', handleIncomingMessage);
        socket.emit('joinProject', { projectId: currentProjectId });
    
        return () => {
            // Cleanup listeners
            socket.off('private_message', handleIncomingMessage);
            socket.off('receiveMessageFromGroup', handleIncomingMessage);
        };
    }, [currentProjectId]);

    // REMOVE this 
    const messages = useAppSelector((state) => state.chatReducer.messages);
    useEffect(() => {
        console.log("Messages in REDUX......", messages);        
    }, [messages]);

    // -------------------------------------------------------------------------------------------------

    // --------------------------------------------------

    // useEffect(() => {
    //     console.log('Sprints........', sprints);        
    // }, [sprints])

    // --------------------------------------------------

    const draggableitemId = useAppSelector((state) => state.draggableItemReducer.dreggedItemId);
    const draggableItemSprintId = useAppSelector((state) =>state.draggableItemSprintReducer.draggedItemSprintId);
    let moveItemToBacklog = false;

    if(draggableItemSprintId) {
        moveItemToBacklog = true;
    };

    // useEffect(() => {
    //     console.log("draggableitemId........", draggableitemId);
    //     console.log("draggableItemSprintId........", draggableItemSprintId);        
    // }, [draggableitemId, draggableItemSprintId])


    // useEffect(() => {
    //     console.log('Sprints..........', sprints);
        
    // }, [sprints])



    useEffect(() => {
        console.log("deleteItemId............", deleteItemId);       
    }, [deleteItemId]);

    useEffect(() => {
        dispatch(fetchItems(currentProjectId));
        dispatch(fetchSprints(currentProjectId));
    }, [currentProjectId]);

    const itemz = useAppSelector((state) => state.itemsReducer.items);
    let backlogItems = itemz.filter(item => !item.sprintId);

    if(reverseOrder) {
        backlogItems = backlogItems.reverse();
    }

    const handleReverseOrder = () => {
        setReverseOrder(!reverseOrder);
    }

    if(selectedTab === "Backlogs") {
        return(
            <div className="flex gap-3 p-3 w-full h-full bg-[#d9d5d5]">
                <div className="w-1/2 overflow-hidden h-full border-2 rounded mb-2 bg-[#ffffff]">
                    <div className="flex justify-between px-4 py-2 h-10 border-b-2">
                        <h1 className="font-bold">Backlog</h1>
                        <div className="flex gap-3">
                            <button onClick={() => dispatch(setIsNewTaskModalOpen())}><MdAdd /></button>
                            <button><FiSearch /></button>
                            <button onClick={handleReverseOrder}><BiSortAlt2 /></button>
                        </div>
                    </div>
                    <div className="h-full overflow-y-auto pb-10 flex flex-col">
                        <DropArea index={0} moveItemToBacklog />

                        {backlogItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <p className="text-lg font-semibold">No tasks in the backlog!</p>
                                <p className="text-sm text-gray-500">Add some tasks to get started.</p>
                            </div>
                        ) : (
                            backlogItems.map((item, index) => (
                            <div key={index}>
                                <Item key={index} item={item} />
                                <DropArea key={`drop-${index}`} index={index + 1} moveItemToBacklog />
                            </div>
                            ))
                        )}
                    </div>

                </div>
    
                <div className="w-1/2  rounded flex flex-col gap-3">
                    <div className="flex justify-between px-4 py-2 h-10 rounded bg-[#ffffff]">
                        <h1 className="font-bold">Sprints</h1>
                        <div className="flex gap-3">
                            { loggedInUser?.role === "admin" ? 
                                <button onClick={() => dispatch(setIsNewSprintModalOpen())}><MdAdd /></button> :
                                null
                            }
                            
                            <button><FiSearch /></button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 h-full overflow-y-auto rounded">
                        {unstartedSprints.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <p className="text-lg font-semibold">No sprints yet!</p>
                                <p className="text-sm text-gray-500">Create one to get started.</p>
                            </div>) : 
                            (unstartedSprints.map((sprint, index) => (
                                <SprintCard key={index} sprint={sprint} />
                            )))
                        }
                    </div>
                </div>
            </div>
        )
    }

    if(selectedTab === "Sprints") {
        return(
            <div className="p-3 w-full h-full bg-[#d9d5d5] overflow-y-auto">
                <Sprint />
            </div>
        )
    }

    if(selectedTab === "Reports") {
        return(
            <div className="p-3 w-full h-full bg-[#d9d5d5] overflow-y-auto">
                <Reports />
            </div>
        )
    }

    if(selectedTab === "Feed") {
        return(
            <div className="p-3 w-full h-full bg-[#d9d5d5] overflow-y-auto">
                <Feed />
            </div>
        )
    }

    if(selectedTab === "Chat") {
        return(
            <div className="p-3 w-full h-full bg-[#d9d5d5] overflow-y-auto">
                <Chat socket={socket} />
            </div>
        )
    }

    if(selectedTab === "Members") {
        return(
            <div className="flex flex-col p-3 w-full h-full bg-[#d9d5d5] overflow-y-auto">
                <div className=" bg-white rounded mx-2 mb-2 p-2">
                    <h1>Add Members</h1>
                    {emails.map((email, index) => (
                        <div key={index} className="flex items-center gap-2 my-2">
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => handleEmailChange(index, e.target.value)}
                            className="border rounded p-2 flex-1"
                        />
                        {emails.length > 1 && (
                            <button onClick={() => handleRemoveField(index)} className="text-red-500">-</button>
                        )}
                        <button onClick={handleAddField} className="text-blue-500">+</button>
                        </div>
                    ))}
                    <button onClick={handleSendInvites} className="bg-black rounded text-white py-2 px-4 mt-4">
                        Send Invites
                    </button>
                </div>
                <h1 className="text-xl font-bold px-3">MEMBERS</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {members.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        )
    }
};

export default TabDetails;