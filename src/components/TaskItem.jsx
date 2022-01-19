import React from 'react';
import ButtonDelete from './UI/buttons/ButtonDelete/ButtonDelete';
import ButtonDone from './UI/buttons/ButtonDone/ButtonDone';
import cl from '../styles/TaskItem.module.css';

const TaskItem = (props) => {

  let completed = [cl.completedNo];
  if (props.task.completed) {
    completed = [cl.completed];
  }

  return (
    <div className={cl.task}>
      <div>
        <strong>{props.number}. <span className={completed}>{props.task.title}</span></strong>
      </div>
      <div className={cl.task__buttons}>
        <ButtonDone onClick={() => props.completed(props.task)} />
        <ButtonDelete onClick={() => props.remove(props.task)} />
      </div>
    </div>
  )
}

export default TaskItem;
