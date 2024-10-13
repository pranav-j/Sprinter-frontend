"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setIsNewTaskModalOpen } from "@/redux/slices/items/newTaskModalSlice";
import { createItem } from "@/redux/slices/items/itemsSlice";
import { useDropzone } from "react-dropzone";

const NewTaskModal = () => {
    const [failedTaskCreation, setFailedTaskCreation] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [type, setType] = useState<string>("task");
    const [start, setStart] = useState<string>("");
    const [end, setEnd] = useState<string>("");
    const [assignee, setAssignee] = useState<string>("");
    const [files, setFiles] = useState<any[]>([]);

    const [titleError, setTitleError] = useState<string>("");
    const [descriptionError, setDescriptionError] = useState<string>("");

    const currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);
    const members = useAppSelector((state) => state.MembersReducer.members);
    
    const dispatch = useAppDispatch();


    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles((previousFiles) => [...previousFiles, ...acceptedFiles])
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': [],
            'application/pdf': [],
            'application/msword': ['.doc', '.docx'],
            'application/vnd.ms-excel': ['.xls', '.xlsx'],
            'text/plain': ['.txt']
        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setTitleError("");
        setDescriptionError("");

        let isValid = true;

        if(!title) {
            setTitleError("Task Title required");
            isValid = false;
        };

        if(!description) {
            setDescriptionError("Description required");
            isValid = false;
        };
        
        const formData = new FormData();
        formData.append("projectId", currentProjectId);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("type", type);
        formData.append("start", start);
        formData.append("end", end);
        formData.append("assignee", assignee);
    
        // Append files to the form data
        files.forEach((file) => {
            formData.append("attachments", file);
        });
    
        if(isValid) {
            try {
                await dispatch(createItem(formData));
                dispatch(setIsNewTaskModalOpen());
                setFailedTaskCreation(false);
            } catch (error) {
                setFailedTaskCreation(true);
                console.error("Error creating task:", error);
            }
        }

    };
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-1/3 max-h-[650px] overflow-scroll">
                <h2 className="text-xl mb-4">Create New Task</h2>
                {failedTaskCreation && <p className="text-red-700">Failed to create task.</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskTitle">
                            Task Title
                        </label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Enter task title"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        {titleError && <p className="text-red-500 text-xs">{titleError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskDescription">
                            Task Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter task description"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        {descriptionError && <p className="text-red-500 text-xs">{descriptionError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskType">
                            Task Type
                        </label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        >
                            <option value="story">Story</option>
                            <option value="task">Task</option>
                            <option value="bug">Bug</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskType">
                        Assignee
                        </label>
                        <select className="w-full px-3 py-2 border rounded-lg" value={assignee} onChange={(e) => setAssignee(e.target.value)}>
                        <option value="" disabled>Select Assignee</option>
                            {members.map((member) => (
                                <option key={member._id} value={member._id}>
                                {member.firstName} {member.lastName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start">
                            Start Date
                        </label>
                        <input
                            type="date"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end">
                            End Date
                        </label>
                        <input
                            type="date"
                            value={end}
                            onChange={(e) => setEnd(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>




                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileUpload">
                            Upload Files
                        </label>
                        <div {...getRootProps()} className="w-full p-4 border-dashed border-2 border-gray-300 rounded-lg">
                            <input {...getInputProps()} />
                            <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
                            </div>
                        {files.length > 0 && 
                            <div className="flex flex-col gap-2 mt-4 p-4 border-dashed border-2 border-gray-300 rounded-lg">
                                {files.map((file, index) => (
                                    <p key={index}>{file.name}</p>
                                ))}
                            </div>
                        }
                    </div>





                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => dispatch(setIsNewTaskModalOpen())}
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

export default NewTaskModal;
