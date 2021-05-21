import React, { useState } from 'react';
import List from './List';
import TodoForm from './TodoForm';
import './Todo.css';

function Todo() {

    const [items, setItems] = useState([]);


    function onAddItem(item) {
        setItems([...items, item])
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem} />

            <List items={items} />

        </div>
    )
}

export default Todo;