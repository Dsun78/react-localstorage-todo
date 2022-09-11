import React from 'react'

import TaskRow from './TaskRow';

const TaskList = ({tasks, toggleTask, showCompleted = false}) => {

  const taskTableRows = (doneValue) => {
    return tasks
      .filter((item) => item.done === doneValue)
      .map((item) => (
        <TaskRow task={item} key={item.title} toggleTask={toggleTask} />
      ));
  }

  return (
    <table className='table table-dark table-striped table-bordered border-secondary'>
      <thead>
        <tr className='table-primary'>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {taskTableRows(showCompleted)}
      </tbody>
    </table>
  );
}

export default TaskList