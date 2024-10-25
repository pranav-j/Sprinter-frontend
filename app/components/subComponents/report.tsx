import { useAppSelector } from '@/redux/hooks';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Reports = () => {
    let sprints = useAppSelector((state) => state.sprintsReducer.sprints);
    sprints = sprints.filter((sprint) => sprint.startedOn);
    const items = useAppSelector((state) => state.itemsReducer.items);

    const COLORS = ['#FFBB28', '#00C49F', '#FF8042'];
    const STATUS_LABELS = ['To Do', 'Ongoing', 'Done'];

    return (
        <div className="flex flex-col p-3 w-full h-full bg-[#d9d5d5] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Sprint Reports</h1>
            <div className="flex gap-4">
              {STATUS_LABELS.map((label, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className="inline-block w-3 h-3 rounded-2xl"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sprints.map((sprint) => {
              const sprintItems = items.filter((item) => item.sprintId === sprint._id);
              const todo = sprintItems.filter((item) => item.status === 'todo').length;
              const onGoing = sprintItems.filter((item) => item.status === 'onGoing').length;
              const done = sprintItems.filter((item) => item.status === 'done').length;
    
              const data = [
                { name: 'To Do', value: todo },
                { name: 'Ongoing', value: onGoing },
                { name: 'Done', value: done },
              ];
    
              return (
                <div key={sprint._id} className="min-w-[250px] bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-4 text-center">{sprint.sprintName}</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                        <Pie
                            data={data}
                            innerRadius={50}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className='px-2'>
                        <div className="flex justify-between w-full">
                            <p className="text-left">Total items:</p>
                            <p className="text-right">{todo + onGoing + done}</p>
                        </div>

                        <div className="flex justify-between w-full">
                            <p className="text-left">Started on:</p>
                            <p className="text-right">{sprint.startedOn ? new Date(sprint.startedOn).toLocaleDateString() : null}</p>
                        </div>

                        <div className="flex justify-between w-full">
                            <p className="text-left">Duration in weeks:</p>
                            <p className="text-right">{sprint.durationInWeeks}</p>
                        </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      );
};

export default Reports;