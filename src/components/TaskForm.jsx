import React, { useState } from 'react';
import ButtonSubmit from './UI/buttons/ButtonSubmit/ButtonSubmit';
import MyInput from './UI/inputs/MyInput.jsx/MyInput';

const TaskForm = (props) => {

  const [task, setTask] = useState('');

  const createTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false
    }
    props.create(newTask);
    setTask('');
  }

  return (
    <form className='form'>
      <h3>Add Todo</h3>
      <MyInput task={task} setTask={setTask} />
      <div>
        <ButtonSubmit onClick={createTask}>Submit</ButtonSubmit>
      </div>
    </form>
  )
}

export default TaskForm;
