import { useState } from 'react'
import './App.css'

const Example = () => {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')
  
  const handleDelete = (idx) => {
    setTasks(task.filter((_, taskIdx) => taskIdx !== idx))
  }

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />

      <button onClick={() => setCount((count) => count + 1)}>
        <div>count is {count}</div>
      </button>
      <div>name is {name}</div>
    </>
  )
}

const Task = ({ children, onDelete }) => {
  return (
    <li className="task">
      <span>{children}</span>
      <button type='button' onClick={(onDelete) => {
        // Домашнее задание: реализовать удаление задачи из списка
      }}>X</button>
    </li>
  )
}

const TodoList = () => {
  const [tasks, setTasks] = useState([ 'Buy milk', 'Walk with the dog' ])
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([ ...tasks, taskText ])
    setTaskText('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
          placeholder='Add a new task'
          onDelete
        />

        <ul>
          {tasks.map((task, idx) => <Task key={task + idx}>{task}</Task>)} 
        </ul>
      </form>
    </>
  )
}

export const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}


