import React, { useState } from 'react'

function Footer({todos, clearCompleted, setSelected}) {

    const notComplete = todos.filter((todo) => todo.completed === false)
    const completed = todos.filter((todo) => todo.completed === true)

    const [select, setSelect] = useState(["selected", "", ""]);

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

    const deleteCompleted = () => {
        if(completed.length > 0){
            clearCompleted(notComplete)
        }
    }

    const selectedAll = () => {
        setSelect(["selected", "", ""]);
    }
    const selectedActive = () => {
        setSelect(["", "selected", ""]);
    }
    const selectedCompleted = () => {
        setSelect(["", "", "selected"]);
    }

    return (
        <footer className={isHidden(todos)}>
            <span className="todo-count">
                <strong>{notComplete.length}</strong>
                {notComplete.length !== 1 ? "items left": "item left"}
            </span>

            <ul className="filters">
        <li>
          <a className={select[0]} id="All" onClick={selectedAll}>
            All
          </a>
        </li>
        <li>
          <a className={select[1]} id="Active" onClick={selectedActive}>
            Active
          </a>
        </li>
        <li>
          <a className={select[2]} id="Completed" onClick={selectedCompleted}>
            Completed
          </a>
        </li>
      </ul>

            <button onClick={deleteCompleted} className={hiddenDelete(completed)}>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer