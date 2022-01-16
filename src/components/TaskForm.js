import React, {useState, useEffect, useRef} from 'react'

function TaskForm(props) {
const[input, setinputs] = useState("");

const inputRef = useRef(null)

//changes focus for typing a task
useEffect(() => {
    inputReft.current.focus()
})

//allows typing into the text box
const handleChange = e =>{
    setinputs(e.target.value)
};

//button functionality for adding a task
const handleSubmit = e => {
    //prevents the add button from refreshing the page
    e.preventDefault();

    props.onSubmit({
        //creating random value for ID with large range, decreases changes of same ID
        id: Math.floor(Math.random()* 9999),
        text: input
    })

    //clears the text box when a task is entered
    setinputs("")
};

    return (
        <form className = "task-form" onSubmit={handleSubmit}>
            <input type ="text"
            placeholder = "Add a task"
            value ={input}
            name = "text"
            className = "task-input"
            onChange = {handleChange}
            ref={inputRef}
            />
            <button className ="task-button">Add Task</button>
        </form>
    )
}

export default TaskForm