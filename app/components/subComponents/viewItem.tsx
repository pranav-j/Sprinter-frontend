import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateItem, resetUpdateItemStatus, addComment } from "@/redux/slices/items/itemsSlice";
import { resetCurrentItemId } from "@/redux/slices/items/viewItemModal";
import { useState, useEffect } from "react";


const ViewItemModal = () => {
    const dispatch = useAppDispatch();
    const currentItemId = useAppSelector((state) => state.ViewItemReducer.currentItemId);
    const currentItem = useAppSelector((state) => state.itemsReducer.items.find((item) => item._id === currentItemId));
    const loggedInUser = useAppSelector((state) => state.userReducer.user);
    const errorUpdatingItem = useAppSelector((state) => state.itemsReducer.errorUpdatingItem);
    const updateItemStatus = useAppSelector((state) => state.itemsReducer.updateItemStatus);
    
    const [title, setTitle] = useState(currentItem?.title || "");
    const [description, setDescription] = useState(currentItem?.description || "");
    const [type, setType] = useState(currentItem?.type || "task");
    const [start, setStart] = useState(currentItem?.start || "");
    const [end, setEnd] = useState(currentItem?.end || "");
    const [assignee, setAssignee] = useState(currentItem?.assignee || "");
    const [files, setFiles] = useState<any[]>(currentItem?.attachments || []);

    const assigneeDetails = useAppSelector((state) => state.MembersReducer.members.find((member) => member._id === assignee));
    const members = useAppSelector((state) => state.MembersReducer.members);

    const [hasChanges, setHasChanges] = useState(false);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        // Monitor changes in the form to toggle "Update" and "Cancel" buttons
        setHasChanges(
            title !== currentItem?.title || 
            description !== currentItem?.description || 
            type !== currentItem?.type || 
            start !== currentItem?.start || 
            end !== currentItem?.end || 
            assignee !== currentItem?.assignee
            
            // || 
            // files.length !== currentItem?.attachments.length
        );
        
    }, [title, description, type, start, end, assignee, files, currentItem]);

    const handleUpdate = () => {
        dispatch(updateItem({
            itemId: currentItemId || "",
            updatedData: { title, description, type, start, end, assignee }
        }));
        setHasChanges(false);
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
          dispatch(addComment({
            itemId: currentItemId || "", 
            comment: newComment 
        }));
          setNewComment("");
        }
      };

    useEffect(() => {
        if (updateItemStatus === 'fulfilled') {
            dispatch(resetCurrentItemId());
            dispatch(resetUpdateItemStatus());
        }
        console.log("updateItemStatus.............", updateItemStatus);
        
    }, [updateItemStatus]);

    const handleCancel = () => {
        // Revert changes and close modal
        setTitle(currentItem?.title || "");
        setDescription(currentItem?.description || "");
        setType(currentItem?.type || "task");
        setStart(currentItem?.start || "");
        setEnd(currentItem?.end || "");
        setAssignee(currentItem?.assignee || "");
        setFiles(currentItem?.attachments || []);
        setHasChanges(false);

        dispatch(resetCurrentItemId());
    };

    if (!currentItemId) return null;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toISOString().split('T')[0];
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-2/5 max-h-[650px] overflow-y-auto">
                <div className="flex justify-between text-xl mb-4">
                    <h2>View Item</h2>
                    <button onClick={handleCancel} className="px-2">x</button>
                </div>
                
                <label className="block mb-2 font-medium">Title</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-lg mb-4"
                />

                <label className="block mb-2 font-medium">Description</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-lg mb-4 min-h-[100px] max-h-[500px]"
                />            

                <label className="block mb-2 font-medium">Type</label>
                <select 
                    value={type} 
                    onChange={(e) => setType(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-lg mb-4"
                >
                    <option value="story">Story</option>
                    <option value="task">Task</option>
                    <option value="bug">Bug</option>
                </select>

                <label className="block mb-2 font-medium">Start Date</label>
                <input 
                    type="date" 
                    value={start ? formatDate(start) : ""} 
                    onChange={(e) => setStart(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-lg mb-4"
                />

                <label className="block mb-2 font-medium">End Date</label>
                <input 
                    type="date" 
                    value={end ? formatDate(end) : ""} 
                    onChange={(e) => setEnd(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-lg mb-4"
                />

                <label className="block mb-2 font-medium">Assignee</label>
                {assignee && loggedInUser?.role === "normalUser" &&
                    <h1 className="w-full px-3 py-2 border rounded-lg mb-4">{assigneeDetails?.firstName} {assigneeDetails?.lastName}</h1>
                }
                
                {loggedInUser?.role === "admin" &&
                    <select 
                    value={assignee || ""} 
                    onChange={(e) => setAssignee(e.target.value)} 
                    className="w-full px-3 py-2 border rounded-lg mb-4"
                    >
                    <option value="" disabled>Select Assignee</option>
                    {members.map((member) => (
                        <option key={member._id} value={member._id}>
                            {member.firstName} {member.lastName}
                        </option>
                    ))}
                    </select>                    
                }

                <div className="mb-4">
                    <label className="block mb-2 font-medium">Attachments</label>
                    {currentItem?.attachments && currentItem.attachments.length > 0 ? (
                        currentItem.attachments.map((attachment, index) => (
                            <div key={index} className="mb-2">
                                <a
                                    href={attachment.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    {attachment.title}
                                </a>
                                <div className="text-sm text-gray-500">
                                    Type: {attachment.metadata} | Size: {(attachment.size / 1024).toFixed(2)} KB
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No attachments available.</p>
                    )}
                </div>


                <div className="mt-4">
                    <h3 className="font-medium mb-2">Comments</h3>
                    {(currentItem?.comments || []).length > 0 ? (
                    <ul className="px-2">
                        {currentItem?.comments?.map((comment) => (
                        <li key={comment._id} className="p-2 flex justify-between border-b">
                            <p>{comment.content}</p>
                            <small>
                                By {members.find((member) => member._id === comment.commentedBy)?.firstName || 'Admin'} {members.find((member) => member._id === comment.commentedBy)?.lastName || ' '} at {new Date(comment.commentedAt).toLocaleString()}
                            </small>
                        </li>
                        ))}
                    </ul>
                    ) : (
                    <p className="w-full text-center">No comments yet.</p>
                    )}
                </div>

                <div className="mt-4">
                    <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mb-2"
                    placeholder="Add a comment"
                    />
                    {newComment !== "" && 
                    <button 
                        onClick={handleAddComment} 
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                    Post Comment
                    </button>
                    }
                </div>

                {hasChanges && (
                    <div className="flex justify-end gap-2">
                        <button 
                            onClick={handleUpdate} 
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Update
                        </button>
                        <button 
                            onClick={handleCancel} 
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewItemModal;