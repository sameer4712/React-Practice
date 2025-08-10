import { useState } from "react"

function ToDoList() {

    const [Task, SetTask] = useState(["Eat Dinner", "Study Hard"])
    const [NewTask, SetNewTask] = useState('')

    function handleTask(event) {
        SetNewTask(event.target.value)
    }

    function AddTask() {
        if (NewTask.trim() !== "")
            SetTask(t => [...t, NewTask]);
        SetNewTask("")
    }

    function DeleteTask(index) {
        const updatedTask = Task.filter((_, i) => i !== index)
        SetTask(updatedTask)

    }

    function MoveUp(index) {
        if (index > 0) {
            const updatedTask = [...Task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            SetTask(updatedTask)
        }

    }

    function MoveDown(index) {
        if (index < Task.length - 1) {
            const updatedTask = [...Task];
            [updatedTask[index + 1], updatedTask[index]] = [updatedTask[index], updatedTask[index + 1]];
            SetTask(updatedTask)
        }

    }
    return (

        <div className="main">
            <div className=" todo" >
                <h1>To Do List</h1>
                <div className="item">

                    <input type="text" placeholder="Enter a new Task......" value={NewTask} onChange={handleTask} />
                    <button onClick={AddTask} className="addbutton"> Add</button>
                    
                </div>

                <ol>
                    {Task.map((item, index) =>
                        <li key={index}>

                            <span>{item}</span>
                            <button onClick={() => DeleteTask(index)} className="delete">Delete</button>
                            <button onClick={() => MoveUp(index)} className="moves">UP</button>
                            <button onClick={() => MoveDown(index)} className="moves">DOWN</button>

                        </li>
                    )}
                </ol>

            </div>
        </div>
    )
}

export default ToDoList