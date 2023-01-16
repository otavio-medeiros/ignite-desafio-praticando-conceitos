import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { v4 as uuid } from "uuid";
import AppContext from '../contexts/AppContext';

import styles from './css/NewTask.module.css';
import ITask, { ITasks } from './interfaces/ITask';

export default function NewTask() {
    const appContext = useContext(AppContext);
    const [newTodo, setNewTodo] = useState<string>('');
    function handleNewTaskOnChange(event: ChangeEvent<HTMLInputElement>) {
        event.currentTarget.setCustomValidity("");
        setNewTodo(event.currentTarget.value);
    }
    function handleInvalidNewTaskContent(event: FormEvent<HTMLInputElement>) {
        event.currentTarget.setCustomValidity("Este campo não pode ser vazio!");
    }
    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();
        const task: ITask = {
            id: uuid(),
            isChecked: false,
            todoMessage: newTodo
        }
        appContext.setTasks([...appContext.tasks, task]);
        setNewTodo('');
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <div className={styles.newTask}>
                <input
                    type="text"
                    className={styles.textInput}
                    onChange={handleNewTaskOnChange}
                    onInvalid={handleInvalidNewTaskContent}
                    placeholder="Adicione uma nova tarefa"
                    value={newTodo}
                    required />
                <button className={styles.createButton} >Criar<PlusCircle size={20} /></button>
            </div>
        </form>
    )
}