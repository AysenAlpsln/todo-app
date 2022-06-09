import { React } from 'react'

function List({ setTodos, todos }) {

    const changeStatus = (e) => {
        let changeTodo = todos.map((todo) => {
            if(parseInt(todo.id) === parseInt(e.target.id)) {
                return { ...todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodos(changeTodo);
    }

    const deleteTodo = (e) =>{
        setTodos(todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id)))
    }

    const isHidden = (e) => {
        if(e.length === 0 ){
            return "todo-list hidden"
        }
        else{
            return "todo-list"
        }
    }

    const allComplete = (e) => {
        let notComp = todos.filter((todo) => todo.completed === false)
        if(notComp.length > 0){
            let allComp = todos.map((todo) => {
                if(todo.completed === false){
                    return{...todo, completed: true};
                }
                return todo;
            })
            setTodos(allComp)
        }
        if(notComp.length === 0){
            let allNotComp = todos.map((todo) => {
                return {...todo, completed: false}
            })
            setTodos(allNotComp)
        }
    }

    const isCompleted = (e) =>{
        if(e.completed === true){
            return "completed"
        }
        else if(e.completed === false){
            return ""
        }
    }
    

    return (
        <div>
            <div className="main">
                <input
                    id='toggle-all'
                    className="toggle-all"
                    type="checkbox"
                    onClick={allComplete}
                    defaultChecked={false} />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className={isHidden(todos)}>
                    {
                        todos.map((todo) => (
                            <li key={todo.id} id={todo.id} className={isCompleted(todo)}>
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