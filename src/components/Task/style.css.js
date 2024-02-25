import styled from "styled-components";

export const StyledDiv = styled.div`
   &.task {
      background-color: #ffff66;
      padding: 16px;
      border: 2px solid #f39c12;
      border-radius: 8px;
      margin-bottom: 16px;
      width: 300px;
   }

   .task-content {
      margin-bottom: 8px;
    }

    .content {
      margin-bottom: 8px;
    }

   .task-actions {
      display: flex;
      justify-content: space-between;
    }

   .edit-button, .delete-button {
      padding: 8px 16px;
      background-color: #f39c12;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease;
   }

   .edit-button:hover, .delete-button:hover {
      background-color: #e67e22;
   }
`;