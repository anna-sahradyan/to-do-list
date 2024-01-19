import { combineReducers } from "redux";
import tasks from "./features/tasks/tasksSlice";

const rootReducer = combineReducers({
    tasks,
    devTools: true,
});
export default rootReducer;