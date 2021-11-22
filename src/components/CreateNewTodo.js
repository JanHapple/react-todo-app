import React from 'react';

const CreateNewTodo = props => {
    
    return (
        <div className="create">
            <input className="input-task" onChange={ props.changeEvent } value={ props.currValue.text } placeholder="Add a new task!"/>
            <button className="input-btn" onClick={ props.clickEvent }>Create new task</button>
        </div>    
    )
}

export default CreateNewTodo;