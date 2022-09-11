import { useEffect, useState } from 'react';
import './App.css';

import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import VisibilityControl from './components/VisibilityControl';

import Container from './components/Container';

function App() {
  
  const [taskItems, setTaskItems] = useState([])

  const [showCompleted, setShowCompleted] = useState(false)
  
  const createNewTask = (newTaskName) => {
    const existItem = taskItems.find(item => item.title === newTaskName)
    console.log(existItem);
    if (!existItem) {
      setTaskItems([...taskItems, {title: newTaskName, done: false}]) 
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((item) =>
        item.title === task.title ? { ...item, done: !item.done } : item
      )
    )
  }

  useEffect(()=> {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const clearTasks = () => {
    setTaskItems(taskItems.filter(item => !item.done))
    setShowCompleted()
  }

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <h1 className='text-center'>Tasks</h1>
        <CreateTask createNewTask={createNewTask} />
        <TaskList tasks={taskItems} toggleTask={toggleTask} />

        <VisibilityControl 
          isChecked = {showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          clearTasks={clearTasks}
          />
        {showCompleted && (
          <TaskList
          tasks={taskItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
          />
          )}
      </Container>
    </main>
  );
}

export default App;
