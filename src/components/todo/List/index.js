import { React } from 'react'

function List({ setStatus, todos }) {

    const changeStatus = (e) => {
        let changeTodo = todos.map((todo) => {
            if(parseInt(todo.id) === parseInt(e.target.id)) {
                return { ...todo, completed: !todo.completed};
            }
            return todo;
        });
        setStatus(changeTodo);
    }

    const deleteTodo = (e) =>{
        setStatus(todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id)))
    }
    

    return (
        <div>
            <div className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        todos.map((todo) => (
                            <li key={todo.id} id={todo.id} className={todo.completed ? "completed":""}>
                                <div className="view">
                                    <input 
                                        className="toggle" 
                                        type="checkbox"
                                        defaultChecked= {todo.completed} 
                                        id={todo.id}
                                        onClick={changeStatus} 
                                    />

                                    <label>{todo.todo_data}</label>

                                    <button 
                                        className="destroy"
                                        id={todo.id}
                                        onClick={deleteTodo}
                                    ></button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default List