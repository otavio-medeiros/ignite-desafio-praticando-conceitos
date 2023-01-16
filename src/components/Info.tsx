import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styles from './css/Info.module.css'
import { ITasks } from './interfaces/ITask'

export default function Info() {
    const appContext = useContext(AppContext);
    const createdTasksCounter = !!appContext.tasks ? appContext.tasks.length : 0;
    const checkedFinishedTasksCounter = !!appContext.tasks ? appContext.tasks.filter(task => task.isChecked === true).length : 0;
    return (
        <div className={styles.infoContainer}>
            <div className={styles.createdContainer}>
                <span className={styles.created}>Tarefas criadas</span>
                <span className={styles.createdCounter}>{createdTasksCounter}</span>
            </div>
            <div className={styles.finishedContainer}>
                <span className={styles.finished}>Concluídas</span>
                <span className={styles.finishedCounter}>{checkedFinishedTasksCounter} de {createdTasksCounter}</span>
            </div>
        </div>
    )
}