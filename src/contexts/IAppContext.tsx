import ITask from "../components/interfaces/ITask"

export default interface IAppContext {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}