import { Itemm } from "@/redux/slices/items/itemsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDraggableItemId, setDraggableItemIdNull } from "@/redux/slices/drag/draggedItemId";
import { setDraggableItemSprintId, setDraggableItemSprintIdNull } from "@/redux/slices/drag/draggedItemSprintId";
import { setCurrentItemId } from "@/redux/slices/items/viewItemModal";

interface ItemProp {
    item: Itemm
};

const Item = ({item}: ItemProp) => {

    const members = useAppSelector((state) => state.MembersReducer.members);

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
            
            <div className="w-full cursor-pointer" onClick={() => dispatch(setCurrentItemId(item._id))}>
                <div className="flex justify-between">
                    <h1>{item._id}</h1>
                    {/* <p>{item.assignee}</p> */}

                    <div>
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
                    ) : null}
                    </div>


                </div>
                
                <h2 className="py-1 line-clamp-1">{item.title}</h2>
                <div className="flex justify-between">
                    <h3>Status: {item.status}</h3>
                    <h3>🗨️ 5</h3>
                </div>
            </div>
        </div>
    )
};

export default Item;