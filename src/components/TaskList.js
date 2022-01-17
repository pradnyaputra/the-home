import React, {useState} from 'react'
import Task from './Task';
import TaskForm from './TaskForm'

function TaskList() {
    const [tasks, setTasks] = useState([]);

   
    const addTask = task => {

         //prevents the addition of uneccessary spaces, and also prevents blank tasks
        if(!task.text || /^\s*$/.test(task.text)) {
            return;
        }

        //all the tasks
        const newTasks = [task, ...tasks];

        setTasks(newTasks);
    };

    const updateTask = (taskId, newVal) => {
        if(!newVal.text || /^\s*$/.test(newVal.text)) {
            return;
        }
        setTasks (prev => prev.map(item =>(item.id === taskId ? newVal : item)));
    };

    //looks for the task and removes it
    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)

        setTasks(removeArr);
    };

    //setting the isComplete value to opposite upon checking the complete button
    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        //adding in HTML elements and passing in component variables
        <div>
            <h1>What Do You Need To Do?</h1>
            <TaskForm onSubmit={addTask}/>
            <Task
            tasks={tasks}
            completeTask={completeTask}
            removeTask={removeTask}
            updateTask={updateTask}/>
        </div>
    );
}

export default TaskList