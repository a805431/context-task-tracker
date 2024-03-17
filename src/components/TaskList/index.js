import Task from "../Task";
import { StyledDiv } from "./style.css";
import useTasksContext from '../../hooks/use-tasks-context';

function TaskList() {
   const { tasks } = useTasksContext();

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