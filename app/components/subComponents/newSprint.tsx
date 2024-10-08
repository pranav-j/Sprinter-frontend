"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setIsNewSprintModalOpen } from "@/redux/slices/sprints/newSprintModalSlice";
import { createSprint } from "@/redux/slices/sprints/sprintsSlice";

const NewSprintModal = () => {
    const [sprintName, setSprintName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [durationInWeeks, setDurationInWeeks] = useState<number>(1);
    const [failedSprintCreation, setFailedSprintCreation] = useState<boolean>(false);

    const [sprintNameError, setSprintNameError] = useState<string>("");

    const currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);

    const dispatch = useAppDispatch();

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //         await dispatch(createSprint({ sprintName, description, durationinweeksInWeeks: durationinweeks }));
    //         dispatch(setIsNewSprintModalOpen());
    //         setFailedSprintCreation(false);
    //     } catch (error) {
    //         setFailedSprintCreation(true);
    //         console.error("Error creating sprint:", error);
    //     }
    // };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("${process.env.NEXT_PUBLIC_BASE_URL}/api/sprint", 
    //             { sprintName, description, durationInWeeks, projectId: currentProjectId }, 
    //             { withCredentials: true }
    //         );
    //         // await dispatch(createSprint({ sprintName, description, durationinweeksInWeeks: durationinweeks }));
    //         dispatch(setIsNewSprintModalOpen());
    //         setFailedSprintCreation(false);
    //     } catch (error) {
    //         setFailedSprintCreation(true);
    //         console.error("Error creating sprint:", error);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setSprintNameError("");

        let isValid = true;

        if(!sprintName) {
            setSprintNameError("Sprint name is required");
            isValid = false;
        }

        if(isValid) {
            try {
                await dispatch(createSprint({sprintName, description, durationInWeeks, projectId: currentProjectId}));
                dispatch(setIsNewSprintModalOpen());
                setFailedSprintCreation(false);
            } catch (error) {
                setFailedSprintCreation(true);
                console.error("Error creating sprint:", error);
            }
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-1/3">
                <h2 className="text-xl mb-4">Create New Sprint</h2>
                {failedSprintCreation && <p className="text-red-700">Failed to create sprint.</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sprintSprintName">
                            Sprint Name
                        </label>
                        <input
                            value={sprintName}
                            onChange={(e) => setSprintName(e.target.value)}
                            type="text"
                            placeholder="Enter sprint name"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                        {sprintNameError && <p className="text-red-500 text-xs">{sprintNameError}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sprintDescription">
                            Sprint Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter sprint description"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="durationinweeks">
                            Duration (in weeks)
                        </label>
                        <input
                            type="number"
                            value={durationInWeeks}
                            onChange={(e) => setDurationInWeeks(Number(e.target.value))}
                            min="1"
                            max="4"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => dispatch(setIsNewSprintModalOpen())}
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

export default NewSprintModal;
