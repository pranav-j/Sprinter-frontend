"use client"

import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setIsNewProjectModalOpen } from "@/redux/slices/projects/newProjectModalSlice";
import { setCurrentProjectId } from "@/redux/slices/projects/currentProjectSlice";
import { fetchProjects } from "@/redux/slices/projects/projectsSlice";
import { MdAdd } from "react-icons/md";

const Sidebar = () => {
    interface Project {
        _id: string;
        title: string;
        description: string;
        createdBy: string;
        members: string[];
        createdAt: string;
        updatedAt: string;
    }

    
    const isCollapsed = useAppSelector((state) => state.sidebarReducer.isCollapsed);
    let currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);

    const projects: Project[] = useAppSelector((state) => (state.projectsReducer.projects))



    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch]);

    if((currentProjectId === "") && (projects.length > 0)) {
        dispatch(setCurrentProjectId(projects[0]._id));
    };

    const handleCurrentProjectClick = (projectId: string) => {
        dispatch(setCurrentProjectId(projectId));
    };

    useEffect(() => {
        // console.log('PROJECTS.......', projects);
        console.log('currentProjectId.........', currentProjectId);
                
    }, [projects, currentProjectId]);

    
    return (
        isCollapsed ? null : (
            <div className="font-Lato p-4 w-[241px] bg-[rgb(18,29,51)] text-[#b9c0c1]">
                <div className="flex justify-between pb-4">
                    <h1>PROJECTS</h1>
                    { loggedInUser?.role === "admin" ? 
                        <button className="px-2" onClick={() => dispatch(setIsNewProjectModalOpen())}><MdAdd /></button> 
                        : null 
                    }
                </div>
                {projects.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <p className="text-lg font-semibold">No projects yet!</p>
                        <p className="text-sm text-gray-500">Create one to get started.</p>
                    </div> 
                ) : (
                    <div className="pl-2">
                    {
                        projects.map((project: Project) => (
                            <h3 
                                key={project._id} 
                                className={`line-clamp-1 py-1 px-2 text-[1rem] cursor-pointer rounded ${project._id === currentProjectId ? 'bg-[#606566] text-[#ffd373] ' : ''}`}
                                onClick={() => handleCurrentProjectClick(project._id)}
                            >{project.title}</h3>
                        ))
                    }
                </div>
                )}
            </div>
        )
    );
}

export default Sidebar;