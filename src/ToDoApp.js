import React, { useState, useRef } from 'react';

// const { app } = window.require('electron').remote;

const ToDo = () => {
    const inputRef = useRef()
    const [tasks, setTasks] = useState([])

    const handleAdd = () => {
        if (!inputRef.current.value) return
        const task = { task: inputRef.current.value, id: Math.random() }
        setTasks([...tasks, task])
        inputRef.current.value = ""
    }

    const handleOnKeyDown = ({ key }) => {
        if (key === "Enter" && inputRef.current.value) {
            const task = { task: inputRef.current.value, id: Math.random() }
            setTasks([...tasks, task])
            inputRef.current.value = ""
        }
    }

    const handleRemoveTask = (selectedTask) => {
        const updatedList = tasks.filter(task => task.id !== selectedTask.id)
        setTasks([...updatedList])
    }
    return (
        <div className="">
            <div className="input">
                <label htmlFor="enter-task">
                    <span>Enter your task</span>
                    <div className='task-box'>
                        <input name="task" type="text" ref={inputRef} id="enter-task" onKeyDown={(e) => handleOnKeyDown(e)} />
                        <button type='button' onClick={handleAdd} >Add</button>
                    </div>
                </label>
            </div>
            <div className='list'>
                <table>
                    <tr>
                        <th>Task Name</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>

                    {tasks.map(task => {
                        return <tr key={task.id}><td key={task.id} className="list-item">{task.task}</td>
                            <td>{new Date().toLocaleDateString()}</td>
                            <td><button onClick={() => handleRemoveTask(task)}>X Remove</button></td></tr>
                    })}

                </table>
            </div>


        </div>
    );
}

export default ToDo;
