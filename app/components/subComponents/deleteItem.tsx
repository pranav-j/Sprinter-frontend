import { useAppDispatch } from "@/redux/hooks";
import { resetDeleteItemId } from "@/redux/slices/items/deleteItemIdSlice";

const DeleteItemModal = () => {
    const dispatch = useAppDispatch(); 
    const handleCancel = () => {
        dispatch(resetDeleteItemId());
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
                <h2 className="text-xl mb-4">Confirm Delete</h2>
                <p className="mb-6">Are you sure you want to delete this item?</p>
                <div className="flex justify-end">
                    <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        // onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteItemModal;