import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Jo'
        },
        {
            id: 2,
            name: 'Very Jo'
        },
        {
            id: 3,
            name: 'Very Very Jo'
        }
    ]);

    const onDelete = (id) => {
        // alert(`Deleted :: ${id}`);
        setTasks(tasks.filter( e => e.id !== id));
    };

    return (
        <div className='container'>
            <Header title='Hola'/>
            <Tasks tasks = {tasks} onDelete={onDelete} />
        </div>
    );
}

/*class App extends React.Component {
  render() {
    return <h1>Hello from Class</h1>
  }
}*/

export default App;
