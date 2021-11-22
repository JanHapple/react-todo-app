import React, { useState } from "react";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import DoneContainer from "./DoneContainer";
import "../css/styles.css";

const App = () => {
    const [currId, setCurrId] = useState(0)
    const [newItems, setNewItems] = useState([]);
    const [doneItems, setDoneItems] = useState([]);
    const [newValue, setNewValue] = useState({ id: currId, text:"", done: false });

    const getInputValue = event => {
        setNewValue({ id: currId, text: event.target.value, done: newValue.done });
    }

    const updateTaskItems = () => {
        if (newValue.text.length > 0) {
            setNewItems(newItems.concat(newValue));
            setCurrId(currId + 1);
            setNewValue({ id: currId, text:"", done: false });
        } else {
            alert("Please enter a task into the input field!");
        }
    }

    const changeItems = changedItem => {
        /* setNewItems(newItems.filter(item => item.id !== changedItem));
        setDoneItems(newItems.filter(item => item.id === changedItem).concat(doneItems)); 
        */

        setNewItems(newItems.filter(item => item.id !== changedItem));
        let changeItem = newItems.filter(item => item.id === changedItem);
        changeItem[0].done = true;  
        setDoneItems(changeItem.concat(doneItems));
    }

    const changeItemsBack = changedItem => {
        /* setDoneItems(doneItems.filter(item => item.id !== changedItem));
        setNewItems(doneItems.filter(item => item.id === changedItem).concat(newItems)); 
        */
       
        setDoneItems(doneItems.filter(item => item.id !== changedItem));
        let changeItem = doneItems.filter(item => item.id === changedItem);
        changeItem[0].done = false;  
        setDoneItems(changeItem.concat(newItems));
        
    }

    const deleteDoneItem = deletedItem => {
        setDoneItems(doneItems.filter(item => item.id !== deletedItem));
    }

    const deleteToDoItem = deletedItem => {
        setNewItems(newItems.filter(item => item.id !== deletedItem));
    }
    
    return (
        <div className="app">
            {/* Child Component 1 - Navigation */}
            <Navigation />
            
            {/* Child Component 2 - ToDosContainer */}
            <ToDosContainer newItems={ newItems } changeItems={ changeItems } changeEvent={ getInputValue } currValue={ newValue } clickEvent={ updateTaskItems } delete={ deleteToDoItem }/>

            {/* Child Component 3 - DoneContainer */}
            <DoneContainer doneItems={ doneItems } changeItemsBack={ changeItemsBack } delete={ deleteDoneItem }/>
        </div>
    );
    
}

export default App;