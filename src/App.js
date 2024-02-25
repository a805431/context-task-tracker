//import Task from "./components/Task";
import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
   const [tasks, setTasks] = useState([]);

   const fetchTasks = async () => {
      const response = await axios.get('http://localhost:4000/tasks');
      setTasks(response.data);
   };

   useEffect(() => {
      fetchTasks();
   }, []);

   const editTaskById = async (id, newName) => {
      //second param is the request body
      const response = await axios.put(`http://localhost:4000/tasks/${id}`, {
         name: newName
      });

      console.log(response);

      const updatedTasks = tasks.map((task) => {
         if (task.id === id) {
            return { ...task, ...response.data };
         }

         return task;
      });

      setTasks(updatedTasks);
   };

   const deleteTaskById = async (id) => {
      await axios.delete(`http://localhost:4000/tasks/${id}`);

      const updatedTasks = tasks.filter((task) => {
         return task.id !== id;
      });

      setTasks(updatedTasks);
   };

   const createTask = async (name) => {
      //second argument of axios.post() is the request body
      const response = await axios.post('http://localhost:4000/tasks', { name }); //name written instead of name: name since key and value are the same

      const updatedTasks = [...tasks, response.data];
      setTasks(updatedTasks);
   };

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
               <TaskList tasks={tasks} onEdit={editTaskById} onDelete={deleteTaskById} />
            </section>
         </div>
         <TaskCreate onCreate={createTask} />
      </div>
   );
}

export default App;