import axios from "axios";

const API_URL = `http://127.0.0.1:5000/api/v1/tasks`;
export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};

//?updated Task
export const createTasks = async (tasksData) => {

    try {
        const response = await axios.post(API_URL, tasksData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
//?update
export const updateTask = async (taskId, updatedTaskData) => {

    try {
        const response = await axios.put(
            `${API_URL}/${taskId}`,
            updatedTaskData,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
