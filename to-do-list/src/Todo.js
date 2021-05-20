import React from 'react';
import './Todo.css'

function Todo() {
    return (
        <div className="container">
            <h1>Todo</h1>
            <form>
                <input type="text" />
                <button>Add</button>
            </form>

            <ul>
                <li>Item</li>
            </ul>
        </div>
    )
}

export default Todo;