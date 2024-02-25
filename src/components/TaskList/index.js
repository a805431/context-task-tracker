import { useContext } from 'react';
import TasksContext from '../../context/tasks';
import Task from "../Task";
import { StyledDiv } from "./style.css";
import { Button } from 'react-bootstrap';

function TaskList({ tasks, onEdit, onDelete }) {
   const { count, incrementCount } = useContext(TasksContext);

   const renderedTasks = tasks.map((task) => {
      return <Task onEdit={onEdit} onDelete={onDelete} key={task.id} task={task} />;
   });

   return <StyledDiv className="task-list">
      {count}
      <Button onClick={incrementCount}>
         Increment
      </Button>
      {renderedTasks}</StyledDiv>;
}

export default TaskList;