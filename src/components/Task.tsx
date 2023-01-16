import ITask from "./interfaces/ITask";

import styles from './css/Task.module.css';
import { ChangeEvent, useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import { Trash } from "phosphor-react";

export default function Task({ id, isChecked, todoMessage }: ITask) {
    const appContext = useContext(AppContext);
    const [checkedTask, setCheckedTask] = useState(isChecked);
    function handleCheckBoxChange(event: ChangeEvent<HTMLInputElement>) {
        setCheckedTask(event.currentTarget.checked);
        const newTasks = appContext.tasks.map(task => {
            if (task.id === id) {
                return { ...task, isChecked: event.currentTarget.checked };
            } else {
                return task;
            }
        })
        appContext.setTasks(newTasks);
    }
    function handleTrashOnClick() {
        const newTasks = appContext.tasks.filter(task => task.id !== id)
        appContext.setTasks(newTasks);
    }
    return (
        <div className={styles.taskItem}>
            <label className={styles.container}>
                <input
                    type="checkbox"
                    checked={checkedTask}
                    onChange={handleCheckBoxChange} />
                <span className={styles.checkmark}></span>
            </label>
            <span className={styles.task}>{todoMessage}</span>
            <Trash className={styles.trash} size={24} onClick={handleTrashOnClick} />
        </div>
    )
}