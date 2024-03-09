//import Task from "./components/Task";
import { useEffect, useContext } from 'react';
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TasksContext from './context/tasks';

function App() {
   const { fetchTasks } = useContext(TasksContext);

   useEffect(() => {
      fetchTasks();
   }, []);

   //обектите трябва да имат и пропс deadline и completed
   // const taskObjects = [
   //    { id: 1, name: "Wash dishes", description: "Dishes need to be washed today." },
   //    { id: 2, name: "Buy fruit", description: "Rasperries, bananas or strawberries." },
   //    { id: 3, name: "Make dinner", description: "Peel potatoes, onions, carrots. Boil them first and add spices." },
   //    { id: 4, name: "Meditate", description: "Sit down and chill for 15-20 min." },
   //    { id: 5, name: "Vacuum", description: "Vacuum living room." }
   // ];

   // const renderedTasks = tasks.map((task, index) => {
   //    return <Task id={task.id} name={task.name} description={task.description} key={index} />
   // });

   return (
      <div>
         <section>
            <div className="header-body">
               <p className="header-title">Task Tracker</p>
            </div>
         </section>

         <div className="app-container">
            <section>
               {/* here deleteTAskById is just being passed to the child component, so that it can be called there */}
               <TaskList />
            </section>
         </div>
         <TaskCreate />
      </div>
   );
}

export default App;