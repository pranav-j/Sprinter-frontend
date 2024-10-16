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
        // e.stopPropagation();
        setShowDropArea(false);
        // try {
        //     const response = await axios.post("${process.env.NEXT_PUBLIC_BASE_URL}/api/moveItem", 
        //         {
        //             insertAt: index,
        //             itemId: draggableitemId,
        //             itemSprintId: draggableItemSprintId,
        //             moveToSprintId,
        //             moveItemToBacklog,
        //             projectId: currentProjectId
        //         }, 
        //         { withCredentials: true }
        //     );
        //     console.log("RESPONSE TEST.......", response);
        // } catch (error) {
        //     console.error("Error in moving item:", error);
        // }
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
