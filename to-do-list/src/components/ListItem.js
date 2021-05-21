import React from 'react';
import Card from './Card';

function DoneImg(props) {
    if (props.done) {
        return (<img src="./assets/on.png" alt="done" />)
    } else {
        return (<img src="./assets/off.png" alt="undone" />)
    }
}

function ListItem(props) {
    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button className='buttonCard' onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done} /></button>
                    <button className='buttonCard' onClick={() => { props.onItemDeleted(props.item) }}><img src="./assets/bin.svg" alt="delete" /></button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem;