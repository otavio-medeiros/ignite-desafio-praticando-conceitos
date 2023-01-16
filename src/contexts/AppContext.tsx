import { createContext } from "react";
import IAppContext from "./IAppContext";

const appContextDefaulValue: IAppContext = {
    tasks: [],
    setTasks: () => null
}

const AppContext = createContext<IAppContext>(appContextDefaulValue);

export default AppContext;