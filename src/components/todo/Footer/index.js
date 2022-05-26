import React from 'react'

function Footer({todos, hide}) {

    const notComplete = todos.filter((todo) => todo.completed === false)
    const completed = todos.filter((todo) => todo.completed === true)

    const isHidden = (e) => {
        if(e.length === 0 ){
            return "footer hidden"
        }
        else{
            return "footer"
        }
    }

    const hiddenDelete = (e) => {
        if(e.length > 0){
            return "clear-completed"
        }
        else{
            return "clear-completed hidden"
        }
    }

    return (
        <footer className={isHidden(todos)}>
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

            <button className={hiddenDelete(completed)}>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer