//import Button from "react-bootstrap/Button";
import { useState } from "react";

function TaskEdit({ task, onSubmit }) {
   const [title, setTitle] = useState(task.name);

   const handleChange = (event) => {
      setTitle(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      onSubmit(task.id, title); //the new task name is the title the user is changing, 
      //which is being displayed in the input field 
      //and contained by the useState
      //in the TaskEdit component
   };

   return (<form className="task-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="save-button">Save</button>
   </form>);
}

export default TaskEdit;