import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { useState } from "react";
import Item from "./item";


const Sprint = () => {
    const [selectedSprint, setSelectedSprint] = useState<string | null>(null);
    const items = useAppSelector((state) => state.itemsReducer.items);
    const sprints = useAppSelector((state) => state.sprintsReducer.sprints);
    const ongoingSprints = sprints.filter((sprint) => sprint.startedOn);
    const draggableitemId = useAppSelector((state) => state.draggableItemReducer.dreggedItemId);

    if(!selectedSprint && ongoingSprints.length > 0) {
        setSelectedSprint(ongoingSprints[0]._id);
    };

    const handleSprintChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSprint(event.target.value);
    };

    const selectedSprintItems = items.filter((item) => item.sprintId === selectedSprint);
    const todoItems = selectedSprintItems.filter((item) => item.status === "todo");
    const onGoingItems = selectedSprintItems.filter((item) => item.status === "onGoing");
    const doneItems = selectedSprintItems.filter((item) => item.status === "done");
    
    const handleStatusChnage = async(statusId: 1 | 2 | 3) => {
        try {
            // const statusId = 1;
            console.log("moved to todo");                
            await axios.post(`http://localhost:3030/api/changeItemStatus`, {itemId: draggableitemId, statusId}, { withCredentials: true } )
        } catch (error) {
            console.error("Error in moving item:", error);
        }
    };

    return(
        <div className="flex flex-col w-full h-full bg-[#d9d5d5] overflow-y-auto">
            <div className="w-full px-4 py-2">                    
                <label htmlFor="options">Sprint</label>
                <select id="options" name="options" onChange={handleSprintChange} value={selectedSprint || ''}>
                    {ongoingSprints.map((sprint) => (
                        <option value={sprint._id} key={sprint._id}>{sprint.sprintName}</option>
                    ))}
                </select>
            </div>
            <div className="flex h-full gap-3">
                <div 
                    className="w-1/3 h-full bg-[#ffffff] border-2 rounded overflow-y-auto"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleStatusChnage(1)}
                >
                    <h1 className="px-4 py-2 border-b-2">To do</h1>
                    {todoItems.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </div>
                <div 
                    className="w-1/3 h-full bg-[#ffffff] border-2 rounded overflow-y-auto"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleStatusChnage(2)}
                >
                    <h1 className="px-4 py-2 border-b-2">In progress</h1>
                    {onGoingItems.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </div>
                <div 
                    className="w-1/3 h-full bg-[#ffffff] border-2 rounded overflow-y-auto"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleStatusChnage(3)}
                >
                    <h1 className="px-4 py-2 border-b-2">Done</h1>
                    {doneItems.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sprint;