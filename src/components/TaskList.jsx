import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, remove, completed }) => {

  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <TaskItem
            remove={remove}
            key={task.id}
            task={task}
            number={index + 1}
            completed={completed}
          />)
      })}
    </div>
  )
}

export default TaskList;
