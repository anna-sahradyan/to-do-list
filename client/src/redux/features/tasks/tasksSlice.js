import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createTasks, getTasks, updateTask} from "./tasksService";

export const getTasksAsyncThunk = createAsyncThunk(
    "tasks/getTasksAsyncThunk",
    async (_, thunkAPI) => {
        try {
            const data = await getTasks();
            return data;
        } catch (err) {
            console.error("Error fetching tasks:", err);
            return thunkAPI.rejectWithValue("Failed to fetch tasks. See console for details.");
        }
    },
);
//?Create Tasks
export const createTasksAsyncThunk = createAsyncThunk(
    "tasks/createTasksAsyncThunk",
    async (tasksData, thunkAPI) => {
        try {

            const data = await createTasks(tasksData);
            return data;
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    },
);
//?UpdateTask
export const updateTaskAsyncThunk = createAsyncThunk(
    "tasks/updateTaskAsyncThunk",
    async ({taskId, updatedTaskData}, thunkAPI) => {
        try {
            return await updateTask(taskId, updatedTaskData);
        } catch (err) {
            const message =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
            return thunkAPI.rejectWithValue(message);
        }
    },
);

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: "",
    },
    reducers: {
        reset: state => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: builder => {
        builder.addCase(getTasksAsyncThunk.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getTasksAsyncThunk.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.tasks = action.payload;
        });
        builder.addCase(getTasksAsyncThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        builder.addCase(createTasksAsyncThunk.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(createTasksAsyncThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.tasks.push(action.payload);
        });
        builder.addCase(createTasksAsyncThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        builder.addCase(updateTaskAsyncThunk.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(updateTaskAsyncThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            const updatedTaskIndex = state.tasks.findIndex(
                task => task.id === action.payload.id,
            );
            if (updatedTaskIndex !== -1) {
                state.tasks[updatedTaskIndex] = action.payload;
            }
        });
        builder.addCase(updateTaskAsyncThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    },
});
export const selectTasks = state => state.tasks.tasks;
export const {reset} = tasksSlice.actions;
export default tasksSlice.reducer;
