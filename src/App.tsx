import './css/global.css';

import styles from './css/App.module.css';

import Header from "./components/Header"
import NewTask from './components/NewTask';
import Tasks from './components/Tasks';
import { useState } from 'react';
import ITask, { ITasks } from './components/interfaces/ITask';
import AppContext from './contexts/AppContext';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      <Header />
      <div className={styles.todo}>
        <NewTask />
        <Tasks />
      </div>
    </AppContext.Provider>
  )
}

export default App
