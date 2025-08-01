// src/components/TodoList/TaskItem.js
import React from 'react';

function TaskItem({ task, onDelete }) {
  return (
    <li className="task-item">
      {task}
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
