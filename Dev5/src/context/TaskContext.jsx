import React, { createContext, useState } from 'react';

/**
 * TaskContext provides a global state to manage the list of tasks.
 * It is consumed by any component that needs access to the task list or task-related actions.
 */
export const TaskContext = createContext();

/**
 * TaskProvider wraps the children components with TaskContext, providing
 * the ability to add and remove tasks from the global state.
 *
 * @param {object} props - The children components that need access to the task state.
 */
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // State to manage the list of tasks

  /**
   * Adds a new task to the task list.
   *
   * @param {object} task - The task object containing the task ID and text.
   */
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  /**
   * Removes a task from the task list based on its ID.
   *
   * @param {number} id - The ID of the task to be removed.
   */
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
