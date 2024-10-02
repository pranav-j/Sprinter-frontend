import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";
import Item from "./item";
import { changeItemStatus } from "@/redux/slices/items/itemsSlice";
import dayjs from "dayjs"; // Install dayjs for date handling

const Sprint = () => {
    const [selectedSprint, setSelectedSprint] = useState<string | null>(null);
    const items = useAppSelector((state) => state.itemsReducer.items);
    const sprints = useAppSelector((state) => state.sprintsReducer.sprints);
    const ongoingSprints = sprints.filter((sprint) => sprint.startedOn);
    const draggableitemId = useAppSelector((state) => state.draggableItemReducer.dreggedItemId);

    const dispatch = useAppDispatch();

    // Set default sprint
    if (!selectedSprint && ongoingSprints.length > 0) {
        setSelectedSprint(ongoingSprints[0]._id);
    }

    const handleSprintChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSprint(event.target.value);
    };

    const selectedSprintDetails = sprints.find((sprint) => sprint._id === selectedSprint);
    const selectedSprintItems = items.filter((item) => item.sprintId === selectedSprint);
    const todoItems = selectedSprintItems.filter((item) => item.status === "todo");
    const onGoingItems = selectedSprintItems.filter((item) => item.status === "onGoing");
    const doneItems = selectedSprintItems.filter((item) => item.status === "done");

    const handleStatusChange = async (statusId: 1 | 2 | 3) => {
        if (draggableitemId) {
            dispatch(changeItemStatus({ itemId: draggableitemId, statusId }));
        }
    };

    // Calculate sprint progress
    const sprintProgress = selectedSprintDetails ? (() => {
        const startedOn = dayjs(selectedSprintDetails.startedOn);
        const today = dayjs();
        const durationInDays = selectedSprintDetails.durationInWeeks * 7;
        const daysPassed = today.diff(startedOn, "day");
        const progressPercentage = Math.min((daysPassed / durationInDays) * 100, 100);
        const remainingDays = Math.max(durationInDays - daysPassed, 0);
        let missedBy = 0;
        if(remainingDays === 0) {
            missedBy = daysPassed - durationInDays;
        }
        return { progressPercentage, daysPassed, remainingDays, missedBy };
    })() : { progressPercentage: 0, daysPassed: 0, remainingDays: 0, missedBy: 0 };

    useEffect(() => {
        console.log("SPRINT being viewed........", selectedSprintDetails);
    }, [selectedSprint]);

    return (
        <div className="flex flex-col w-full h-full bg-[#d9d5d5] overflow-y-auto">
            <div className="w-full px-4 py-2 bg-[#ffffff] border-2 rounded mb-3">
                <label className="pr-4" htmlFor="options">Sprint</label>
                <select className="border" id="options" name="options" onChange={handleSprintChange} value={selectedSprint || ''}>
                    {ongoingSprints.map((sprint) => (
                        <option value={sprint._id} key={sprint._id}>{sprint.sprintName}</option>
                    ))}
                </select>

                {/* Progress Bar */}
                {selectedSprintDetails && (
                    <div className="mt-4">
                        <div className="w-full bg-gray-200 h-1 rounded">
                            <div
                                className={`h-1 rounded ${sprintProgress.missedBy === 0 ? "bg-blue-500" : "bg-red-600"} `}
                                style={{ width: `${sprintProgress.progressPercentage}%` }}
                            />
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                            <span className="text-xs">{sprintProgress.daysPassed} days passed</span>
                            {
                                sprintProgress.missedBy !== 0 && <span className="text-xs text-red-600">Missed by {sprintProgress.missedBy} days </span>
                            }
                            <span className="text-xs">{sprintProgress.remainingDays} days remaining</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex h-full gap-3">
                <div
                    className="w-1/3 h-full bg-[#ffffff] border-2 rounded overflow-y-auto"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleStatusChange(1)}
                >
                    <h1 className="px-4 py-2 border-b-2">To do</h1>
                    {todoItems.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </div>
                <div
                    className="w-1/3 h-full bg-[#ffffff] border-2 rounded overflow-y-auto"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleStatusChange(2)}
                >
                    <h1 className="px-4 py-2 border-b-2">In progress</h1>
                    {onGoingItems.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </div>
                <div
                    className="w-1/3 h-full bg-[#ffffff] border-2 rounded overflow-y-auto"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleStatusChange(3)}
                >
                    <h1 className="px-4 py-2 border-b-2">Done</h1>
                    {doneItems.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sprint;
