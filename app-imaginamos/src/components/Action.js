import React from 'react';
export default (props) => {
    return (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
          >
          ¿Que es mas importante?
        </button>
      </div>
  );
}