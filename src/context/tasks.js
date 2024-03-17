import { createContext, useState } from 'react';
import axios from 'axios';

const TasksContext = createContext();

function Provider({ children }) {
   const [tasks, setTasks] = useState([]);

   const fetchTasks = async () => {
      const response = await axios.get('http://localhost:4000/tasks');
      setTasks(response.data);
   };

   const editTaskById = async (id, newName) => {
      //second param is the request body
      const response = await axios.put(`http://localhost:4000/tasks/${id}`, {
         name: newName
      });

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

   const valueToShare = {
      tasks,
      deleteTaskById,
      editTaskById,
      createTask,
      fetchTasks
   };

   return <TasksContext.Provider value={valueToShare}>
      {children}
   </TasksContext.Provider>
}

export { Provider };
export default TasksContext;

//to import both at the same time we need to write for example
//import TasksContext, { Provider } from '../../context/tasks";