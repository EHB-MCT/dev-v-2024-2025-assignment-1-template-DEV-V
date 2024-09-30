import React from 'react';
import TaskItem from './TaskItem';

/**
 * TaskList component renders a list of tasks.
 * @param {object} props - The tasks and handlers for toggling and removing tasks.
 * @returns {JSX.Element} A list of task items.
 */
const TaskList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
