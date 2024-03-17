import { useContext } from 'react';
import TasksContext from '../../context/tasks';
import Task from "../Task";
import { StyledDiv } from "./style.css";

function TaskList() {
   const { tasks } = useContext(TasksContext);

   const renderedTasks = tasks.map((task) => {
      return <Task key={task.id} task={task} />;
   });

   return (
      <StyledDiv className="task-list">
         {renderedTasks}
      </StyledDiv>
   );
}

export default TaskList;