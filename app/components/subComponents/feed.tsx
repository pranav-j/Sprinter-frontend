import { useAppSelector } from "@/redux/hooks";
import { format } from 'date-fns'; // Optional: for date formatting

const Feed = () => {
    const itemsWithActivityLog = useAppSelector((state) => state.itemsReducer.items).filter((item) => item.activityLog.length > 0);

    return (
        <div className="bg-white p-4">
            <h1 className="text-2xl font-bold mb-4">Feed</h1>
            {itemsWithActivityLog.map((item) => (
                <div key={item._id} className="mb-4">
                    {item.activityLog?.map((log, index) => (
                        <div key={index} className="flex justify-between items-center border-b py-2">
                            <span className="text-left">{log.change}</span>
                            {/* <span className="text-right text-gray-500">
                                {format(new Date(log.changedAt), 'dd/MM/yyyy HH:mm')}
                            </span> */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Feed;
