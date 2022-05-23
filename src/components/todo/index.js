import {useState} from 'react';

import "./style.css";

import List from './List';
import Form from './Form';

function Todo() {
    const [todos, setTodos] = useState([
        {
            todo_data: 'Learn Javascript',
            completed: "completed"
        },{
            todo_data: 'Learn React',
            completed: ""
        },{
            todo_data: 'Have a life!',
            completed: ""
        }
    ]);

    return (
        <div>
            <section class="todoapp">
                <header class="header">
                    <h1>todos</h1>
                    <Form />
                </header>

               <List todos={todos} />

                <footer class="footer">
                    <span class="todo-count">
                        <strong>2</strong>
                        items left
                    </span>

                    <ul class="filters">
                        <li>
                            <a class="selected">All</a>
                        </li>
                        <li>
                            <a>Active</a>
                        </li>
                        <li>
                            <a>Completed</a>
                        </li>
                    </ul>

                    <button class="clear-completed">
                        Clear completed
                    </button>
                </footer>
            </section>

            <footer class="info">
                <p>Click to edit a todo</p>
            </footer>
        </div>
    );
}

export default Todo