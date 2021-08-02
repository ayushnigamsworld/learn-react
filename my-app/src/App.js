import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

function App() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Jo',
            reminder: false
        },
        {
            id: 2,
            name: 'Very Jo',
            reminder: false
        },
        {
            id: 3,
            name: 'Very Very Jo',
            reminder: false
        }
    ]);

    const onDelete = (id) => {
        // alert(`Deleted :: ${id}`)kh;
        setTasks(tasks.filter( e => e.id !== id));
    };

    const toggleReminder = (id) => {
        // alert(`Double clicked :: ${id}`);
        setTasks(
            tasks.map( e => e.id === id ?
                { ...e, reminder: !e.reminder } : e ));
    };

    const addTask = ({ text, day, reminder }) => {
        console.log(text, day, reminder);
        const id = Math.floor(Math.random() * 10000);
        setTasks([...tasks, { id, reminder, day, name: text }]);
    };

    const [showAddTask, setShowAddTask] = useState(false);

    const toggleAddTaskBtn = () => {
      setShowAddTask(!showAddTask);
    };

    return (
        <div className='container'>
            <Header toggleAddTaskBtn={toggleAddTaskBtn} title='Hola'/>
            {
                showAddTask && <AddTask onAdd={addTask} />
            }
            {
                tasks.length > 0 ?
                    (<Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder}/>)
                    :
                    ('No tasks')
            }
        </div>
    );
}

/*class App extends React.Component {
  render() {
    return <h1>Hello from Class</h1>
  }
}*/

export default App;
