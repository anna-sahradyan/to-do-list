import React from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import TaskForm from "../../form/TaskForm";
import TaskList from "../TaskList/TaskList";

const TaskContainer = () => {
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <TaskForm/>
                <TaskList/>
            </DndProvider>
        </>
    );
};

export default TaskContainer;