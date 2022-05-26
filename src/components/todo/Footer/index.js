import React from 'react'

function Footer({todos}) {

    const notComplete = todos.filter((todo) => todo.completed === false)

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{notComplete.length}</strong>
                {notComplete.length !== 1 ? "items left": "item left"}
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
    )
}

export default Footer