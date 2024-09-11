"use client";

import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/dashboardaHeader";
import TabDetails from "../components/tabDetails";
import Sidebar from "../components/sidebar";
import NewProject from "../components/subComponents/newProject";
import NewTaskModal from "../components/subComponents/newItem";
import NewSprintModal from "../components/subComponents/newSprint";
import ViewItemModal from "../components/subComponents/viewItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchMembers } from "@/redux/slices/membersSlice";

import { resetCurrentItemId } from "@/redux/slices/items/viewItemModal";

export default function Dashboard() {
    const isNewProjectModalOpen = useAppSelector((state) => state.newProjectModelOpenReducer.isNewProjectModalOpen);
    const isTaskModalOpen = useAppSelector((state) => state.newTaskModelOpenReducer.isNewTaskModalOpen);
    const isNewSprintModalOpen = useAppSelector((state) => state.newSprintModalOpenReducer.isNewSprintModalOpen);
    const currentItemId = useAppSelector((state) => state.ViewItemReducer.currentItemId);

    const currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);
    const members = useAppSelector((state) => state.MembersReducer.members);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);

    // const [members, setMembers] = useState<any>([]);

    // useEffect(() => {
    //     const getMembers = async() => {
    //         const response = await axios.get(`http://localhost:3030/api/getMembers?projectId=${currentProjectId}`, { withCredentials: true })
    //         setMembers(response);
    //     }

    //     getMembers();

    //     console.log("members.......", members);
        
    // }, [currentProjectId])

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMembers(currentProjectId));
        console.log("members.......", members);
    }, [currentProjectId])

    return(
        <div className="h-screen ststic">
            <DashboardHeader />
            <div className="flex h-full overflow-hidden">
                <Sidebar />
                <TabDetails />
            </div>
            {
                isNewProjectModalOpen ? (
                <div className="h-screen absolute bottom-0 left-0">
                    <NewProject />
                </div>
                ) : null
            }
            {
                isTaskModalOpen ? (
                <div className="h-screen absolute bottom-0 left-0">
                    <NewTaskModal />
                </div>
                ) : null
            }
            {
                isNewSprintModalOpen ? (
                <div className="h-screen absolute bottom-0 left-0">
                    <NewSprintModal />
                </div>
                ) : null                
            }
            {
                currentItemId ? (
                <div className="h-screen absolute bottom-0 left-0">
                    {/* <button className="bg-black text-gray-50 rounded p-2" onClick={() => dispatch(resetCurrentItemId())}>Close Item</button> */}
                    <ViewItemModal />
                </div>
                ) : null                
            }
        </div>
    )
};