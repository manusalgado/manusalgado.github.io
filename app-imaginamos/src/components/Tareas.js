import React from 'react';
import Tarea from './Tarea'; 

const Tareas = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Quitar todas</button>
        {
          props.options.map( (option) => (
            <Tarea
              key={option}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>
    );
  }
  
  export default Tareas;