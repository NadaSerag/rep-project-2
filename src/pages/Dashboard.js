import { useSelector } from 'react-redux';
//import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../styles/dashboard.css"

 function Dashboard() {

  const totalProducts = useSelector((state) => state.products.count);
  const totalInCart = useSelector((state) => state.cart.count);



//   const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];
//   const data = [
//   { name: 'To Do', value: tasksToDo.length},
//   { name: 'In Progress', value: tasksInProgress.length },
//   { name: 'Done', value: tasksCompleted.length },
// ];

  return(
    <>
    <div className = "title">Dashboard</div>
    <h3>Total Number of Products: {totalProducts}</h3>
    <h3>Total Number of Products In Cart: {totalInCart}</h3>
 

    {/* <ResponsiveContainer width="100%" height={300}>
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
</ResponsiveContainer> */}
    </>
  );
}
 export default Dashboard;