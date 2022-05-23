import { React } from 'react'

function List({ todos }) {
    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        todos.map((todo, i) => (
                            <li key={i} className={todo.completed}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" />
                                    <label>{todo.todo_data}</label>
                                    <button className="destroy"></button>
                                </div>
                            </li>
                        ))
                    }
                    {/* <li class="completed">
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                            <label>Learn JavaScript</label>
                            <button class="destroy"></button>
                        </div>
                    </li>
                    <li>
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                            <label>Learn React</label>
                            <button class="destroy"></button>
                        </div>
                    </li>
                    <li>
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                            <label>Have a life!</label>
                            <button class="destroy"></button>
                        </div>
                    </li> */}
                </ul>
            </section>
        </div>
    )
}

export default List