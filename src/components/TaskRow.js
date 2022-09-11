import React from 'react'

const TaskRow = ({task, toggleTask}) => {
  return (
    <tr>
      <td className='d-flex justify-content-between'>
        {task.title}
        <input
          type="checkbox"
          checked = {task.done}
          onChange={() => toggleTask(task)}
        ></input>
      </td>
    </tr>
  )
}

export default TaskRow