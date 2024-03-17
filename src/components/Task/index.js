import { StyledDiv } from "./style.css";
import { useState, useContext } from "react";
import TasksContext from '../../context/tasks';
import TaskEdit from "../TaskEdit"

function Task({ task }) {
   const [showEdit, setShowEdit] = useState(false);
   const { deleteTaskById } = useContext(TasksContext);

   const handleDeleteClick = () => {
      deleteTaskById(task.id);
   }

   const handleEditClick = () => {
      setShowEdit(!showEdit);
   }
   const handleSubmit = () => {
      setShowEdit(false);
   }

   let content = (<>
      <div className="media-content">
         <p>Task: {task.id} - {task.name}</p>
      </div>
      <div className="content">
         {task.description}
      </div>
   </>);

   if (showEdit) {
      content = <div><TaskEdit task={task} onSubmit={handleSubmit} /></div>;
   }

   return <StyledDiv className="task">
      <div className="task-content">
         {content}
         <div className="task-actions">
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
         </div>
      </div>
   </StyledDiv>;
}

export default Task;