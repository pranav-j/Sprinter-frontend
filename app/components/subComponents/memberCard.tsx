// interface MemberData {
//     name: string,
//     imageUrl: string,
//     email: string,
//     tasksAssigned: number,
//     tasksCompleted: number,
//     tasksInProgress: number
// };

// interface MemberProp {
//     member: MemberData
// };

interface MemberProp {
    member: {
        name: string,
        imageUrl: string,
        email: string,
        tasksAssigned: number,
        tasksCompleted: number,
        tasksInProgress: number
    }
};

const MemberCard = ({member}: MemberProp) => {
    return(
        <div className="min-w-[200px] max-h-[300px] bg-white rounded-lg shadow-md p-4 m-2">
            <img className="w-16 h-16 rounded-full mx-auto" src={member.imageUrl} alt={member.name} />
            <h2 className="text-center font-bold text-xl mt-2">{member.name}</h2>
            <p className="text-center text-gray-600">{member.email}</p>
            <div className="mt-4">
                <p>Tasks Assigned: {member.tasksAssigned}</p>
                <p>Tasks Completed: {member.tasksCompleted}</p>
                <p>Tasks In Progress: {member.tasksInProgress}</p>
            </div>
        </div>
    )
};

export default MemberCard;