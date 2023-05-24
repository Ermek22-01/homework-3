import React, { useState }from "react";
function TodoApp() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTesk] = useState('')
    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask])
            setNewTesk('')
        }
    }

    const handleChange = (event) => {
        setNewTesk(event.target.value)
    }

    return (
        <div>
            <h1>Todos List</h1>
            <input type="text"value={newTask}
            placeholder="Enter a new task"/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) =>(
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}



export default TodoApp;
