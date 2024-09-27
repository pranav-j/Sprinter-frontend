"use client"

import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setIsNewProjectModalOpen } from "@/redux/slices/projects/newProjectModalSlice";
import { setCurrentProjectId } from "@/redux/slices/projects/currentProjectSlice";
import { fetchProjects } from "@/redux/slices/projects/projectsSlice";
// import axios from "axios";

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

    // useEffect(() => {
    //     const fetchProjects = async() => {
    //         try {
    //             const response = await axios.get("http://localhost:3030/api/post", { withCredentials: true });
    //             setProjects(response.data.projects);
    //         } catch (error) {
    //             console.log("Error fetching projects:", error);
    //         }
    //     };

    //     fetchProjects();        
    // }, [])

    // useEffect(() => {
    //     console.log("PROJECTS...",projects);
    // }, [projects]);

    const projects: Project[] = useAppSelector((state) => (state.projectsReducer.projects))



    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProjects())
    }, []);

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
            <div className="p-4 w-[241px] border-r-2 border-[#1e293b]">
                <div className="flex justify-between">
                    <h1>PROJECTS</h1>
                    { loggedInUser?.role === "admin" ? 
                        <button className="px-2" onClick={() => dispatch(setIsNewProjectModalOpen())}>+</button> 
                        : null 
                    }
                </div>
                <div className="pl-2">
                    {
                        projects.map((project: Project) => (
                            <h3 
                                key={project._id} 
                                className={`line-clamp-1 py-1 px-2 cursor-pointer rounded ${project._id === currentProjectId ? 'bg-[#d9d5d5] ' : ''}`}
                                onClick={() => handleCurrentProjectClick(project._id)}
                            >{project.title}</h3>
                        ))
                    }
                </div>           
            </div>
        )
    );
}

export default Sidebar;