import React from 'react';
import {useSelector} from "react-redux";
import {selectTasks} from "../../../redux/features/tasks/tasksSlice";

const Task = () => {
    const tasks = useSelector(selectTasks);
    return (
        <>

        </>
    );
};

export default Task;