import React, { useState } from "react";

const SubmitForm = (props) => {
    const [todo, setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const formSubmit = (event) => {
        event.preventDefault();

        if(todo.length === 0) {
            alert("Add a todo!")
            return;
        }

        props.onFormSubmit(todo);
        setTodo('');
    }

    return (
        <form onSubmit={formSubmit}>
            <input
                value={todo}
                type="text"
                className="input"
                placeholder="Enter item"
                onChange={handleChange}
            />
            <button className="button">Submit</button>
        </form>
    )
}


export default SubmitForm;