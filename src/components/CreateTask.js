import React from 'react'

// import styled from 'styled-components'

import { useState } from 'react';

// const Form = styled.form `
//   margin: 5px;
//   padding: 5px;
//   font-size: 1rem;
//   background-color: white;
// `
// const Input = styled.input `
//   background-color: white;
//   font-size: 1rem;
// `
// const SaveButton = styled.button ` 
//   background: lightgrey;
//   margin: 5px;
//   padding: 5px;
//   font-size: 1rem;
// `

const CreateTask = (props) => {
    console.log(props)
    
    const [newTaskName, setNewTaskName] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault()
      props.createNewTask(newTaskName)
      setNewTaskName('') //Limpiar input
    }

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      {" "}
      {/* Previene refrescar página */}
      <div className='col-9'>
        <input
          type="text"
          placeholder="Introduzca nueva tarea"
          value={newTaskName} //Limpiar input
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        ></input>
      </div>
      <div className='col-3'>
        <button className='btn btn-primary btn-sm'>Save task</button>
      </div>
    </form>
  );
}

export default CreateTask