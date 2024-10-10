"use client";

import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/dashboardaHeader";
import TabDetails from "../components/tabDetails";
import Sidebar from "../components/sidebar";
import NewProject from "../components/subComponents/newProject";
import NewTaskModal from "../components/subComponents/newItem";
import NewSprintModal from "../components/subComponents/newSprint";
import ViewItemModal from "../components/subComponents/viewItem";
import DeleteItemModal from "../components/subComponents/deleteItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchMembers } from "@/redux/slices/membersSlice";

import { resetCurrentItemId } from "@/redux/slices/items/viewItemModal";

export default function Dashboard() {
    const isNewProjectModalOpen = useAppSelector((state) => state.newProjectModelOpenReducer.isNewProjectModalOpen);
    const isTaskModalOpen = useAppSelector((state) => state.newTaskModelOpenReducer.isNewTaskModalOpen);
    const isNewSprintModalOpen = useAppSelector((state) => state.newSprintModalOpenReducer.isNewSprintModalOpen);
    const currentItemId = useAppSelector((state) => state.ViewItemReducer.currentItemId);
    const deleteItemId = useAppSelector((state) => state.deleteItemReducer.deleteItemId);

    const currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);
    const members = useAppSelector((state) => state.MembersReducer.members);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);

    const moveItemStatus = useAppSelector((state) => state.itemsReducer.moveItemStatus);

    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("moveItemStatus........", moveItemStatus);        
    }, [moveItemStatus]);

    useEffect(() => {
        dispatch(fetchMembers(currentProjectId));
        console.log("members.......", members);
    }, [currentProjectId]);

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
                    <ViewItemModal />
                </div>
                ) : null                
            }
            {
                deleteItemId ? (
                    <div className="h-screen absolute bottom-0 left-0">
                        <DeleteItemModal />
                    </div>
                ) : null 
            }
            {
                moveItemStatus === 'pending' ? (
                    <div className="h-screen absolute bottom-0 left-0">
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="size-80 bg-white rounded-lg flex items-center justify-center">
                                <h1>MOVING........</h1>
                            </div>
                        </div>
                    </div>
                ) : null 
            }
        </div>
    )
};