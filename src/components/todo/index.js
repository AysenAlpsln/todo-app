import { useState, useEffect } from 'react';

import "./style.css";

import List from './List';
import Form from './Form';
import Footer from './Footer';

function Todo() {
    const [todos, setTodos] = useState([
        {
            id: 0,
            todo_data: 'Learn Javascript',
            completed: true
        }, {
            id: 1,
            todo_data: 'Learn React',
            completed: false
        }, {
            id: 2,
            todo_data: 'Have a life!',
            completed: false
        }
    ]);

    const [hide, setHide] = useState("All");

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <Form addTodo={setTodos} todos={todos} />
                </header>

                <List setStatus={setTodos} todos={todos} hide={hide} />

                <Footer todos={todos} hide={hide} />
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
            </footer>
        </div>
    );
}

export default Todo