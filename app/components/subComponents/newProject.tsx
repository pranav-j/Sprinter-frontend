"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setIsNewProjectModalOpen } from "@/redux/slices/projects/newProjectModalSlice";
import { createProject } from "@/redux/slices/projects/projectsSlice";

const NewProjectModal = () => {
    const [failedPostCreation, setFailedPostCreation] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const [titleError, setTitleError] = useState<string>("");

    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("TITLE......", title);
        console.log("DESCRIPTION......", description);
        console.log("failedPostCreation......", failedPostCreation);
    }, [title, description])


    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        setTitleError("");

        let isValid = true;

        if(!title) {
            setTitleError("Project Title required");
            isValid = false;
        }

        if(isValid) {
            try {
                await dispatch(createProject({title, description, startDate, endDate }))
                dispatch(setIsNewProjectModalOpen());
                setFailedPostCreation(false);
            } catch (error) {
                setFailedPostCreation(true);
                console.error("Error creating project:", error);
            }
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-1/3">
                <h2 className="text-xl mb-4">Create New Project</h2>
                { failedPostCreation && <p className="text-red-700">Failed to create project.</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectTitle">
                            Project Title
                        </label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Enter project title"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        {titleError && <p className="text-red-500 text-xs">{titleError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDescription">
                            Project Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter project description"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                            Start Date
                        </label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                            End Date
                        </label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => dispatch(setIsNewProjectModalOpen())}
                            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewProjectModal;
