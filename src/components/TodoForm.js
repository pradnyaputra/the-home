import React, {useState} from 'react'

function TodoForm() {
const[input, setinputs] = useState("");

const handleSubmit = e => {
    e.preventDefault();
};

    return (
        <form className = "todo-form">
            <input type ="text"
            placeholder = "Add a todo"
            value ={input}
            name = "text"
            className = "todo-input"
            />
            <button classNAme ="todo-button">Add todo</button>
        </form>
    )
}

export default TodoForm