import React from "react";
// * Import font-awesome icons - remember to install these modules using NPM before trying to use an icon!
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const redoIcon = <FontAwesomeIcon icon={faRedo} />
const deleteIcon = <FontAwesomeIcon icon={ faTrash } />

const DoneItem = props => {
    const changeCurrItemBack = () => {
        props.changeItemsBack(props.id)
    }
    
    const delteCurrItem = () => {
        props.deleteItem(props.id)
    }

    return (
        <div className="done-item">
            {/* Take the "todo" object received in the "item" prop, and use the value of its "text" property */}
            <p>{props.newDoneItem.text}</p>
            <div>
                {/* Use a font awesome icon to render a "check" icon - see line 9 for creating the icon component */}
                <button className="btn" onClick={ changeCurrItemBack }>{ redoIcon }</button>
                <button className="btn" onClick={ delteCurrItem }>{ deleteIcon }</button>
            </div>
        </div>
    );
}

export default DoneItem;