import {useState, useEffect} from 'react';

import "./style.css";

import List from './List';
import Form from './Form';

function Todo() {
    const [todos, setTodos] = useState([
        {
            id: 0,
            todo_data: 'Learn Javascript',
            completed: true
        },{
            id: 1,
            todo_data: 'Learn React',
            completed: false
        },{
            id: 2,
            todo_data: 'Have a life!',
            completed: false
        }
    ]);

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

               <List setStatus={setTodos} todos={todos} />

                <footer className="footer">
                    <span className="todo-count">
                        <strong>2</strong>
                        items left
                    </span>

                    <ul className="filters">
                        <li>
                            <a className="selected">All</a>
                        </li>
                        <li>
                            <a>Active</a>
                        </li>
                        <li>
                            <a>Completed</a>
                        </li>
                    </ul>

                    <button className="clear-completed">
                        Clear completed
                    </button>
                </footer>
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
            </footer>
        </div>
    );
}

export default Todo