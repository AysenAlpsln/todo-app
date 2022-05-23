import {useState, useEffect} from 'react'

const initialValues = {todo_data: "", completed: ""}

function Form({addTodo, todos}) {

    const [form, setForm] = useState(initialValues);

    useEffect(() => {
        setForm(initialValues)
    }, [todos]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(form.todo_data === ''){
            return false;
        }

        addTodo([...todos, form])
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name='todo_data'
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={form.todo_data}
                    autoFocus
                    onChange={onChangeInput} />
            </form>
        </div>
    )
}

export default Form