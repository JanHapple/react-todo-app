import React from "react";
import DoneItem from "./DoneItem";

const DoneContainer = props => {
    // Receive the "tasks" array as a prop
    // For every "todo" object inside the array (e.g. "Wake up" or "Walk the dog")...
    // ... create a new <ToDoItem /> to represent that task.
    const doneItems = props.doneItems.map(done => {
        return <DoneItem newDoneItem={ done } key={ done.id } id={ done.id } changeItemsBack={ props.changeItemsBack } deleteItem={ props.delete }/>
    })

    return (
        <div className="done-container">
            <div className="todos">
                <h1>DONE</h1>

                {/* Render the list of <ToDoItem />s */}
                {doneItems}
            </div>
        </div>
    );
}

export default DoneContainer;