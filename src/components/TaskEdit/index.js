//import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import TasksContext from '../../context/tasks';

function TaskEdit({ task, onSubmit }) {
   const [title, setTitle] = useState(task.name);
   const { editTaskById } = useContext(TasksContext);

   const handleChange = (event) => {
      setTitle(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      onSubmit();
      editTaskById(task.id, title);
   };

   return (<form className="task-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="save-button">Save</button>
   </form>);
}

export default TaskEdit;