import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const StyledDiv = styled.div`
   &.task-create{
      display: flex;
      flex-direction: column;
      background-color: #3cd19f;
      width: 100%;
      height: 200px;
   }
   
   .input{
      width: 65%;
      height: 200%;
   }`;

export const StyledH3 = styled.h3`
   color: #fff;
   font-family: sans-serif;
   font-size: 150%;
   `;

export const StyledForm = styled(Form)`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
   `;