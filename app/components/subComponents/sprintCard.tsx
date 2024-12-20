"use client"

import { Sprint, startSprint } from "@/redux/slices/sprints/sprintsSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { fetchItems } from "@/redux/slices/items/itemsSlice";
import Item from "./item";
import DropArea from "./dropArea";
import axios from "axios";

interface SprintProp {
    sprint: Sprint
};

const SprintCard = ({sprint}: SprintProp) => {

    const items = useAppSelector((state) => state.itemsReducer.items);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);
    const currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);
    const sprintItems = items.filter(item => item.sprintId === sprint._id);
    sprintItems.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchItems({ projectId: currentProjectId, sprintId: sprint._id }));
    }, [])

    console.log("sprintItems...........", sprintItems);
    
    const handleStartSprint = async() => {
        dispatch(startSprint(sprint._id));
    }

    return(
        <div className="border-2 flex flex-col w-full border-b-2 rounded">
            <div className="flex justify-between items-center border-b-2 py-3">
                <h1 className="font-bold px-4">{sprint.sprintName}</h1>
                { loggedInUser?.role === "admin" ? 
                    <button onClick={handleStartSprint} className="px-4">START</button> :
                    null
                }               
            </div>
            <div className="bg-[#ffffff] h-full">
                <DropArea index={0} moveToSprintId={sprint._id} />
                {sprintItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center h-32">
                        <p className="text-lg font-semibold">No sprints yet!</p>
                        <p className="text-sm text-gray-500">Create one to get started.</p>
                    </div>
                ) : 
                    (sprintItems.map((item, index) => (
                        <div key={index}>
                            <Item key={index} item={item} />
                            <DropArea key={`drop-${index}`} index={index + 1} moveToSprintId={sprint._id} />
                        </div>
                    )))
                }
            </div>
        </div>
    )
};

export default SprintCard;