import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import { moveItem } from "@/redux/slices/items/itemsSlice";

interface DropAreaProp {
    index: number;
    moveToSprintId?: string | null;
    moveItemToBacklog?: boolean;
};

const DropArea = ({index, moveToSprintId = null, moveItemToBacklog = false}: DropAreaProp) => {
    const [showDropArea, setShowDropArea] = useState<boolean>(false);

    const draggableItemId = useAppSelector((state) => state.draggableItemReducer.dreggedItemId);
    const draggableItemSprintId = useAppSelector((state) =>state.draggableItemSprintReducer.draggedItemSprintId);
    const currentProjectId = useAppSelector((state) => state.currentProjectIdReducer.currentProjectId);
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("showDropArea............", showDropArea);
    }, [showDropArea]);

    const handleOnDrop = async (e: React.DragEvent) => {
        e.preventDefault();
        setShowDropArea(false);
        dispatch(moveItem({
            insertAt: index,
            draggableItemId,
            draggableItemSprintId,
            moveToSprintId,
            moveItemToBacklog,
            currentProjectId
          }));
    };

    return (
        <>
            <div
                className={`w-full h-4 border-b-2`}
                onDragEnter={() => setShowDropArea(true)}
                onDragLeave={() => setShowDropArea(false)}
                onDragOver={(e) => e.preventDefault()}  // Prevent default to allow drop
                onDrop={handleOnDrop}
            >
            </div>
            {showDropArea && (
                <h1 className={`w-full h-10 border-b-2`}>
                    Drop Area
                </h1>
            )}
        </>
    );
};

export default DropArea;
