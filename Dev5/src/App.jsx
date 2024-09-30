import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import TodoPage from './pages/TodoPage';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <Header />
        <TodoPage />
      </div>
    </TaskProvider>
  );
};

export default App;
