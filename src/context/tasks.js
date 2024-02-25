import { createContext, useState } from 'react';

const TasksContext = createContext();

function Provider({ children }) {
   const [count, setCount] = useState(5);

   const valueToShare = {
      count,
      incrementCount: () => {
         setCount(count + 1);
      },
   }

   return <TasksContext.Provider value={valueToShare}>
      {children}
   </TasksContext.Provider>
}

export { Provider };
export default TasksContext;

//to import both at the same time we need to write for example
//import TasksContext, { Provider } from '../../context/tasks";