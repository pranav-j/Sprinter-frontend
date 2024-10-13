import { useAppSelector } from "@/redux/hooks";
import { Member } from "@/redux/slices/membersSlice"
import Image from "next/image";
import { useEffect } from "react";


interface MemberCardProps {
    member: Member;
}

const MemberCard = ({ member }: MemberCardProps) => {
    const memberTasks = useAppSelector((state) => state.itemsReducer.items).filter((item) => item.assignee === member._id);
    const noOfTasksAssigned = memberTasks.length;
    const noOfTasksCompleted = memberTasks.filter((task) => task.status === 'done').length;
    const noOfTasksOngoing = memberTasks.filter((task) => task.status === 'onGoing').length;

    useEffect(() => {
        console.log("memberTasks..................", memberTasks);
        
    }, [])

    return(
        <div className="min-w-[200px] max-h-[300px] bg-white rounded-lg shadow-md p-4 m-2">
            <Image
                className="w-16 h-16 rounded-full mx-auto"
                src={member.profilePic || "https://robohash.org/red"}
                alt={member.firstName || 'Member'}
                width={64}
                height={64}
            />
            <h2 className="text-center font-bold text-xl mt-2">{member.firstName} {member.lastName}</h2>
            <p className="text-center text-gray-600">{member.email}</p>
            <div className="mt-4">
                <p>Tasks Assigned: {noOfTasksAssigned}</p>
                <p>Tasks Completed: {noOfTasksCompleted}</p>
                <p>Tasks In Progress: {noOfTasksOngoing}</p>
            </div>
        </div>
    )
};

export default MemberCard;