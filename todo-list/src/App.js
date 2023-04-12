import './App.css';
import {useState} from 'react';

function App() {
  const [todoList , setTodoList] = useState([]);
  const [newTask , setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} type="text" />
        <button>Add Task</button>
      </div>
      <div className="list">{newTask}</div>

    </div>
  );
}

export default App;
