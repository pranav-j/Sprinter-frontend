import { Sprint } from "@/redux/slices/sprints/sprintsSlice";
import { useAppSelector } from "@/redux/hooks";
import Item from "./item";
import DropArea from "./dropArea";
import axios from "axios";

interface SprintProp {
    sprint: Sprint
};

const SprintCard = ({sprint}: SprintProp) => {

    const items = useAppSelector((state) => state.itemsReducer.items);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);
    const sprintItems = items.filter(item => item.sprintId === sprint._id);
    sprintItems.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    console.log("sprintItems...........", sprintItems);
    
    const handleStartSprint = async() => {
        try {
            const response = await axios.post("http://localhost:3030/api/startSprint", { sprintId: sprint._id }, { withCredentials: true });
    
            if (response.status === 200) {
                // Handle successful response
                alert("Sprint started");
            } else {
                // Handle errors
                alert("Failed to start Sprint. Try again later.");
            }
        } catch (error) {
          console.error("Error sending invites:", error);
          alert("Error sending invites. Please try again.");
        }
    }

    return(
        <div className="border-2 flex flex-col w-full border-b-2 rounded">
            <div className="flex justify-between items-center border-b-2 py-3">
                <h1 className="text-lg font-bold px-4">{sprint.sprintName}</h1>
                { loggedInUser?.role === "admin" ? 
                    <button onClick={handleStartSprint} className="px-4">START</button> :
                    null
                }
                
            </div>
            <div className="bg-[#ffffff]">
                <DropArea index={0} moveToSprintId={sprint._id} />
                {
                    sprintItems.map((item, index) => (
                        <div key={index}>
                            <Item key={index} item={item} />
                            <DropArea key={`drop-${index}`} index={index + 1} moveToSprintId={sprint._id} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default SprintCard;