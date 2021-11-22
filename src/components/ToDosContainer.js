import React from 'react';
import SelfCreatedItem from "./SelfCreatedItem";
import CreateNewTodo from "./CreateNewTodo";

const ToDosContainer = props => {
    const selfCreatedItems = props.newItems.map(task => {
        return <SelfCreatedItem newToDo={ task } key={ task.id } id={ task.id } changeItems={ props.changeItems } deleteItem={ props.delete }/>
    });

    return (
        <div className="todos-container">
            <div className="todos">
                <CreateNewTodo changeEvent={ props.changeEvent } currValue={ props.currValue } clickEvent={ props.clickEvent }/>
                <h1>TO DO</h1>

                { selfCreatedItems }
            </div>
        </div>
    );
}

export default ToDosContainer;