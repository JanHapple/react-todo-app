import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const checkIcon = <FontAwesomeIcon icon={ faCheck } />
const deleteIcon = <FontAwesomeIcon icon={ faTrash } />

const SelfCreatedItem = props => {
    
    const changeCurrItem = () => {
        props.changeItems(props.id)
    }

    const deleteCurrItem = () => {
        props.deleteItem(props.id)
    }
    
    return (
        <div className="todo-item">
            {/* Take the "todo" object received in the "item" prop, and use the value of its "text" property */}
            <p>{props.newToDo.text}</p>
            <div>
                {/* Use a font awesome icon to render a "check" icon - see line 9 for creating the icon component */}
                <button className="btn" onClick={ changeCurrItem }>{ checkIcon }</button>
                <button className="btn" onClick={ deleteCurrItem }>{ deleteIcon }</button>
            </div>
        </div>
    )
}

export default SelfCreatedItem;