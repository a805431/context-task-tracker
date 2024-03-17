import { useState } from 'react';
import useTasksContext from '../../hooks/use-tasks-context';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { StyledDiv } from './style.css';
import { StyledForm } from './style.css';
import { StyledH3 } from './style.css';

function TaskCreate() {
   const [taskName, setTaskName] = useState('');
   const { createTask } = useTasksContext();

   const handleChange = (event) => {
      setTaskName(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      createTask(taskName);
      setTaskName('');
   };

   return (<StyledDiv className="task-create">
      <StyledH3>Add a Task</StyledH3>
      <StyledForm onSubmit={handleSubmit}>
         <Form.Label style={{ fontFamily: "sans-serif" }}>Title</Form.Label>
         <Form.Control className="input" type="text" value={taskName} onChange={handleChange} />
         <Form.Group>
            <Button className="button" variant="success" type="submit">Create!</Button>
         </Form.Group>
      </StyledForm>
   </StyledDiv>);
}

export default TaskCreate;