import { Itemm, updateItem } from "@/redux/slices/items/itemsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDraggableItemId, setDraggableItemIdNull } from "@/redux/slices/drag/draggedItemId";
import { setDraggableItemSprintId, setDraggableItemSprintIdNull } from "@/redux/slices/drag/draggedItemSprintId";
import { setCurrentItemId } from "@/redux/slices/items/viewItemModal";
import { setDeleteItemId } from "@/redux/slices/items/deleteItemIdSlice";
import { TiDocumentText } from "react-icons/ti";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { CgDebug } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa6";
import { PiHandGrabbingLight } from "react-icons/pi";
import Image from "next/image";


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
            className="flex w-full h-28 border-b-2 px-4 py-3 opacity-100" 
            draggable
            onDrag={handelOnDrag}
            onDragEnd={handleOnDragEnd}
            style={{ opacity: 1 }}
            >
            <div className="w-11 flex ">
                {
                    item.type === 'task' ? <IoCheckmarkDoneCircleOutline className="text-blue-500" /> :
                    item.type === 'bug' ? <CgDebug className="text-red-500" /> :
                    item.type === 'story' ? <TiDocumentText className="text-green-500" /> : null
                }                
            </div>
            
            <div className="w-full cursor-pointer">
                <div className="flex justify-between">
                    <h1  onClick={() => dispatch(setCurrentItemId(item._id))}>{item._id}</h1>
                    <div className="flex gap-2">
                        {(loggedInUser?._id === item.createdBy || loggedInUser?.role === 'admin') &&
                            <button onClick={handleDelete} className="h-5 px-2 text-xs flex text-center text-white bg-red-500 rounded-full border">Delete</button>
                        }
                        
                        {assignee ? (
                            assignee.profilePic ? (
                                <Image
                                    src={assignee.profilePic}
                                    alt={assignee.firstName || 'Assignee'}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 rounded-full"
                                />
                            ) : (
                                <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                                    <span className="text-sm font-bold">
                                        {assignee.firstName ? assignee.firstName.charAt(0) : ''}
                                    </span>
                                </div>
                            )
                        ) : (
                            loggedInUser?.role === 'admin' ? (<span className="w-5 h-5"></ span>) :
                            (
                                <button onClick={takeUpItem} className="w-5 h-5 rounded-full border flex items-center">
                                    <PiHandGrabbingLight className="w-5 h-5" />
                                </button>
                            )
                        )}
                    </div>

                </div>
                
                <h2  onClick={() => dispatch(setCurrentItemId(item._id))} className="py-1 line-clamp-1">{item.title}</h2>
                <div className="flex justify-between text-sm">
                    <span onClick={() => dispatch(setCurrentItemId(item._id))} className=" text-gray-400 flex items-center">
                        Status: 
                        <p className={item.status === "todo" ? `text-red-500 pl-1` :
                                      item.status === "onGoing" ? `text-orange-400 pl-1` :
                                      item.status === "done" ? `text-green-400 pl-1` : ''}>                                        
                            {item.status}
                        </p>
                    </span>
                    {item.comments && 
                        <div className="flex items-center space-x-2">
                            <FaRegComment className="text-gray-400" />
                            <p>{item.comments.length}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default Item;