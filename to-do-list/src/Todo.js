import React, { useState } from 'react';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
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

    function onDone(item) {
        let updateItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })

        setItems(updateItems);
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem} />

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />

        </div>
    )
}

export default Todo;