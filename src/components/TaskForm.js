import React, {useState, useEffect, useRef} from 'react';

function TaskForm(props) {

const[input, setInput] = useState(props.edit ? props.edit.value : "");

const inputRef = useRef(null);

//changes focus for typing a task
useEffect(() => {
    inputRef.current.focus();
});

//allows typing into the text box
const handleChange = e => {
    setInput(e.target.value);
};

//button functionality for adding a task
const handleSubmit = e => {
    //prevents the add button from refreshing the page
    e.preventDefault();

    props.onSubmit({
        //creating random value for ID with large range, decreases changes of same ID
        id: Math.floor(Math.random()* 9999),
        text: input
    });

    //clears the text box when a task is entered
    setInput("");
};

    return (
        //creating two different versions of the input form; one for updating a task and one for creating one
        <form className = "task-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>
            <input
            type ="text"
            placeholder = "Update task"
            value ={input}
            name = "text"
            className = "task-input edit"
            onChange = {handleChange}
            ref={inputRef}
            />
            <button className ="task-button edit">Update</button>
            </>
            ) : (
            <>
            <input
            type ="text"
            placeholder = "Add a task"
            value ={input}
            name = "text"
            className = "task-input"
            onChange = {handleChange}
            ref={inputRef}
            />
            <button className ="task-button">Add Task</button>
            </>
            )}
            
        </form>
    )
}

export default TaskForm