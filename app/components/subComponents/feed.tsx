import { useAppSelector } from "@/redux/hooks";

const Feed = () => {
    const itemsWithActivityLog = useAppSelector((state) => state.itemsReducer.items)
        .filter((item) => item.activityLog && item.activityLog.length > 0);

    return (
        <div className="bg-white p-4 rounded-lg flex flex-col h-full overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">Feed</h1>
            {itemsWithActivityLog.map((item) => (
                <div key={item._id}>
                    {item.activityLog?.filter(log => log?.change)?.map((log, index) => (
                        <div key={index} className="flex justify-between items-center border-b py-2">
                            <span>{log.change}</span>
                            <span className="text-gray-500">{new Date(log.changedAt).toLocaleDateString()}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Feed;
