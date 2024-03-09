import { createContext, useState } from 'react';

const TasksContext = createContext();

function Provider({ children }) {

   return <TasksContext.Provider value={{}}>
      {children}
   </TasksContext.Provider>
}

export { Provider };
export default TasksContext;

//to import both at the same time we need to write for example
//import TasksContext, { Provider } from '../../context/tasks";