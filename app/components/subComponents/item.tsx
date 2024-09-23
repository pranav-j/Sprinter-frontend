import { Itemm, updateItem } from "@/redux/slices/items/itemsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDraggableItemId, setDraggableItemIdNull } from "@/redux/slices/drag/draggedItemId";
import { setDraggableItemSprintId, setDraggableItemSprintIdNull } from "@/redux/slices/drag/draggedItemSprintId";
import { setCurrentItemId } from "@/redux/slices/items/viewItemModal";
import { setDeleteItemId } from "@/redux/slices/items/deleteItemIdSlice";

interface ItemProp {
    item: Itemm
};

const Item = ({item}: ItemProp) => {

    const members = useAppSelector((state) => state.MembersReducer.members);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);
    const assignee = members.find((member) => member._id === item.assignee);

    const dispatch = useAppDispatch();

    const handelOnDrag = () => {
        dispatch(setDraggableItemId(item._id));
        if(item.sprintId) {
            dispatch(setDraggableItemSprintId(item.sprintId));
        }
    };

    const handleOnDragEnd = () => {
        dispatch(setDraggableItemIdNull())
        if(item.sprintId) {
            dispatch(setDraggableItemSprintIdNull());
        }
    };

    const handleDelete = () => {
        dispatch(setDeleteItemId(item._id));
    };

    const takeUpItem = () => {
        console.log("Clicked GRAB")
        dispatch(updateItem({
            itemId: item._id || "",
            updatedData: { assignee: loggedInUser?._id }
        }));
    };

    return(
        <div 
            className="flex w-full h-28 border-b-2 px-4 py-3" 
            draggable
            onDrag={handelOnDrag}
            onDragEnd={handleOnDragEnd}
            >
            <div className="w-11 flex ">
                <h1>📜</h1>
            </div>
            
            <div className="w-full cursor-pointer">
                <div className="flex justify-between">
                    <h1  onClick={() => dispatch(setCurrentItemId(item._id))}>{item._id}</h1>
                    <div className="flex gap-2">
                        {loggedInUser?._id === item.createdBy &&
                            <button onClick={handleDelete} className="h-5 px-2 text-xs text-white bg-red-500 rounded-full border">Delete</button>
                        }
                        
                        {assignee ? (
                            assignee.profilePic ? (
                            <img
                                src={assignee.profilePic}
                                alt={assignee.firstName}
                                className="w-5 h-5 rounded-full"
                            />
                            ) : (
                            <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-sm font-bold">
                                {assignee.firstName.charAt(0)}
                                </span>
                            </div>
                            )
                        ) : 
                        <button onClick={takeUpItem} className="w-5 h-5 rounded-full border">🫳</button>}
                    </div>


                </div>
                
                <h2  onClick={() => dispatch(setCurrentItemId(item._id))} className="py-1 line-clamp-1">{item.title}</h2>
                <div className="flex justify-between">
                    <h3  onClick={() => dispatch(setCurrentItemId(item._id))}>Status: {item.status}</h3>
                    {item.comments && 
                        <h3>🗨️{item.comments.length}</h3>
                    }
                </div>
            </div>
        </div>
    )
};

export default Item;