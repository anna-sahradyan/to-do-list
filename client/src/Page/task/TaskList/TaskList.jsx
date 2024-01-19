import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getTasksAsyncThunk} from "../../../redux/features/tasks/tasksSlice";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks?.tasks);
    const dispatch = useDispatch();
    console.log(tasks)
    useEffect(() => {
        dispatch(getTasksAsyncThunk());
    }, []);

    const [queue, setQueue] = useState([]);
    const [development, setDevelopment] = useState([]);
    const [done, setDone] = useState([]);
    const statuses = ["queue", "development", "done"];
    const navigate = useNavigate();
    return (
        <>

        </>
    );
};

export default TaskList;