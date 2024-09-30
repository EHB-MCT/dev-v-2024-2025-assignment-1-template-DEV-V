import React from 'react';

/**
 * TaskItem component displays individual task details.
 * @param {object} props - The task and action handlers.
 * @returns {JSX.Element} A task item with buttons to complete or remove it.
 */
const TaskItem = ({ task, toggleComplete, removeTask }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
};

export default TaskItem;
