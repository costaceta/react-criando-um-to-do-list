import React from "react";

const TodoList = (props) => (
    <div className="list-wrapper">
        { props.todos && props.todos.map( (todo, index) => (
            <div key={index} className="list-item m-3">
                { todo }
                <button
                    className="delete is-pulled-right"
                    onClick={
                        () => props.onDelete(index)
                    }
                ></button>
            </div>
        ))}
    </div>
)

export default TodoList;