import { ITasks } from './interfaces/ITask';

import styles from './css/Task.module.css';
import Info from './Info';
import { ClipboardText } from 'phosphor-react';
import Task from './Task';
import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

export default function Tasks() {
    const appContext = useContext(AppContext);
    const isTasksEmpty = !appContext.tasks || appContext.tasks.length === 0;
    return (
        <div className={styles.tasks}>
            <Info />
            {!isTasksEmpty && (
                appContext.tasks.map(task => {
                    return (
                        < Task
                            key={task.id}
                            id={task.id}
                            isChecked={task.isChecked}
                            todoMessage={task.todoMessage} />
                    )
                })
            )
            }
            {isTasksEmpty && (
                <div className={styles.tasksEmpty}>
                    <ClipboardText className={styles.clipboard} size={56} />
                    <p className={styles.font700}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.font400}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )
            }
        </div>
    )
}