import React, { useEffect, useState } from 'react';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import Modal from './components/Modal'
import './Todo.css';

const SAVED_ITEMS = 'savedItems';

function Todo() {

    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items])

    function onAddItem(text) {
        let it = new Item(text);
        setItems([...items, it]);
        onHideModal();
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
        });
        setItems(updateItems);
    }

    function onHideModal() {
        setShowModal(false)
    }

    return (
        <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background-1.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
        }}>
            <div className="container">
                <header className='header'>
                    <h1>Todo</h1>
                    <button className='addButton' onClick={() => { setShowModal(true) }}>+</button>
                </header>
                <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
                <Modal show={showModal} onHideModal={onHideModal}>
                    <TodoForm onAddItem={onAddItem} />
                </Modal>
            </div>
        </div>
    )
}

export default Todo;