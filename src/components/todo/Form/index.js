import { useState, useEffect } from 'react'

function Form({ addTodo, todos }) {

    const [form, setForm] = useState("");

    useEffect(() => {
        setForm("")
    }, [todos]);

    const onChangeInput = (e) => {
        setForm(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (form === '') {
            return false;
        }

        addTodo([
            ...todos,
            {
                id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
                todo_data: form,
                completed: false
            }
        ])
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name='todo_data'
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={form}
                    autoFocus
                    onChange={onChangeInput} />
            </form>
        </div>
    )
}

export default Form