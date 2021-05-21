import React, { useState } from 'react';
import List from './List';
import TodoForm from './TodoForm';
import Item from './Item';
import './Todo.css';

function Todo() {

    const [items, setItems] = useState([]);


    function onAddItem(text) {
        let it = new Item(text);

        setItems([...items, it]);
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id);

        setItems(filteredItems);
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem} />

            <List onItemDeleted={onItemDeleted} items={items} />

        </div>
    )
}

export default Todo;