import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles/App.css';

const App = () => {

  const [tasks, setTasks] = useState([]);

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const completedTask = (completedTask) => {
    setTasks(tasks.map((task) => {
      if (task.id === completedTask.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }))
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskForm create={createTask} />

      {
        tasks.length !== 0
          ?
          <TaskList
            remove={removeTask}
            completed={completedTask}
            tasks={tasks}
          />
          :
          <h1>Tasks not found</h1>
      }
    </div>
  );
}

export default App;
