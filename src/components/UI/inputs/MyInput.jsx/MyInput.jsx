import React from 'react';
import cl from './MyInput.module.css';

const MyInput = ({ task, setTask }) => {

  return (
    <input
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className={cl.myInput}
      type="text"
      placeholder='Add new todo'
    />
  )
}

export default MyInput;
