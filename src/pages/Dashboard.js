 import { useSelector } from 'react-redux';
 import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

 function Dashboard() {

  const totalProducts = useSelector((state) => state.products.count);
  const totalTasks = useSelector((state) => state.tasks.count);
  const tasks = useSelector((state) => state.tasks.array);
  const tasksInProgress = tasks.filter((task)=> task.status === "In Progress");
  const tasksCompleted = tasks.filter((task)=> task.status === "Done");
  const tasksToDo = tasks.filter((task)=> task.status === "To Do");


  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];
  const data = [
  { name: 'To Do', value: tasksToDo.length},
  { name: 'In Progress', value: tasksInProgress.length },
  { name: 'Done', value: tasksCompleted.length },
];

  return(
    <>
    <h3>Total Number of Products: {totalProducts}</h3>
    <h3>Total Number of Tasks: {totalTasks}</h3>
    <h3>Tasks In Progress: {tasksInProgress.length} </h3>
    <h3>Tasks Completed: {tasksCompleted.length}</h3>

    <ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</ResponsiveContainer>
    </>
  );
}
 export default Dashboard;