import React, {useState} from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import {FaRegCheckCircle} from "react-icons/fa";
import {FaPen} from "react-icons/fa";
import {FaRegTimesCircle} from "react-icons/fa";



function Task({tasks, completeTask, removeTask, updateTask}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = value => {
        updateTask(edit.id, value)
        setEdit({
            id: null,
            value: ""
        });
    };

    if (edit.id) {
        return <TaskForm edit={edit} onSubmit={submitUpdate} />
    }

    return tasks.map((task, index) => (
        <div className = {task.isComplete ? "task-row complete" : "task-row"}
        key={index}>

            <div key={task.id} onClick={() =>
                completeTask(task.id)}>
                {task.text}
            </div>

            <div className="task-icons">
                <FaRegCheckCircle 
                className ="complete-task-icon"/>
                <FaRegTimesCircle onClick={() => removeTask(task.id)}
                className ="delete-task-icon"/>
                <FaPen
                onClick={() => setEdit({id: task.id, value:task.text})}
                className ="edit-task-icon"/>
            </div>
        </div>
    ));
}

export default Task