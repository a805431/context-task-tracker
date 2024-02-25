import Task from "../Task";
import { StyledDiv } from "./style.css";

function TaskList({ tasks, onEdit, onDelete }) {
   const renderedTasks = tasks.map((task) => {
      return <Task onEdit={onEdit} onDelete={onDelete} key={task.id} task={task} />;
   });

   return <StyledDiv className="task-list">{renderedTasks}</StyledDiv>;
}

export default TaskList;