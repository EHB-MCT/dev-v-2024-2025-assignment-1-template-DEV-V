import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

/**
 * TodoPage component handles the rendering of the todo list.
 * It allows users to add new tasks and remove existing ones by interacting with TaskContext.
 */
const TodoPage = () => {
  const { tasks, addTask, removeTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState(''); // State to store the text of the new task

  /**
   * Handles adding a new task to the task list.
   * Prevents adding empty tasks.
   */
  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask({ id: Date.now(), text: newTask });
      setNewTask(''); // Clear input field after task is added
    }
  };

  return (
    <div>
      <div className="mb-6 flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a task"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-black"
          >
            <span>{task.text}</span>
            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
