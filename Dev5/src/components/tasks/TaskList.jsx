import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

/**
 * TaskList component renders a list of tasks using the TaskItem component.
 */
const TaskList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <ul className="space-y-4">
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

// Prop Validation
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default TaskList;