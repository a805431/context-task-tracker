//import Button from "react-bootstrap/Button";
import { useState } from "react";
import useTasksContext from "../../hooks/use-tasks-context";

function TaskEdit({ task, onSubmit }) {
   const [title, setTitle] = useState(task.name);
   const { editTaskById } = useTasksContext();

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