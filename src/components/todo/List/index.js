import { useState } from 'react'

function List({ todos }) {
    return (
        <div>
            <section class="main">
                <input class="toggle-all" type="checkbox" />
                <label for="toggle-all">
                    Mark all as complete
                </label>

                <ul class="todo-list">
                    {
                        todos.map((todo, i) => (
                            <li key={i} class={todo.completed}>
                                <div class="view">
                                    <input class="toggle" type="checkbox" />
                                    <label>{todo.todo_data}</label>
                                    <button class="destroy"></button>
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