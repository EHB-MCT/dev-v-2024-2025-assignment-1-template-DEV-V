import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

/**
 * TodoPage component renders the main interface of the Todo App.
 * It allows users to add, complete, and remove tasks.
 */
const TodoPage = () => {
  const { tasks, addTask, removeTask } = useContext(TaskContext); // Access global state and actions
  const [newTask, setNewTask] = useState(''); // Local state for the new task input

  /**
   * Handles the addition of a new task.
   * Prevents empty input submissions.
   */
  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask({ id: Date.now(), text: newTask, completed: false });
      setNewTask(''); // Clear the input field
    }
  };

  return (
    <div>
      {/* Input and Add Button */}
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

      {/* Task List */}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm ${
              task.completed ? 'line-through text-gray-500' : 'text-black'
            }`}
          >
            <span>{task.text}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => removeTask(task.id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
