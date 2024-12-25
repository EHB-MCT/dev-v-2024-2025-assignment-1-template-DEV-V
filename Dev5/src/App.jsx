import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Header from './components/layout/Header';
import TodoPage from './pages/TodoPage';
import './styles/app.css';

/**
 * App component acts as the root of the application.
 * It wraps the entire application with the TaskProvider for global state management.
 */
const App = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-8">
          <Header />
          <TodoPage />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
