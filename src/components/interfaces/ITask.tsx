export default interface ITask {
    key?: string
    id: string
    isChecked: boolean
    todoMessage: string
}

export interface ITasks {
    tasks: ITask[],
    setTasks?: React.Dispatch<React.SetStateAction<ITask[]>>
}