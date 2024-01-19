import React, {useState} from 'react';
import {InputPart, StyledWrapper, Title} from "./formStyled";
import {v4 as uuidv4} from "uuid";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    MenuItem,
    Paper,
    TextField,
} from "@mui/material";
import SearchTask from "../searchPage/SearchTask";

const TaskForm = () => {
    const [task, setTask] = useState({
        title: "",
        body: "",
        priority: "",
    });
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setTask("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (<>
        <StyledWrapper>
            <InputPart>
                <Paper style={{
                    width: 300,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Button onClick={handleClickOpen}>Open form dialog</Button>
                </Paper>
                <SearchTask/>
            </InputPart>
            <Dialog open={open} onClose={handleClose}>
                <Title>Write the title and description here.</Title>
                <DialogContent>
                    <FormControl onSubmit={e => e.preventDefault()}>
                        <TextField
                            style={{width: '300px'}}
                            id="outlined-multiline-flexible"
                            label="Title"
                            multiline
                            maxRows={4}
                            sx={{margin: 1}}
                            value={task.title || ""}
                            onChange={e => setTask({...task, title: e.target.value})}
                        />
                        <TextField
                            style={{width: '300px'}}
                            id="outlined-multiline-flexible"
                            label="Description"
                            multiline
                            maxRows={4}
                            sx={{margin: 1}}
                            value={task.body || ""}
                            onChange={e => setTask({...task, body: e.target.value})}
                        />
                        <TextField
                            style={{width: '300px'}}
                            id="priority"
                            label="Priority"
                            select
                            sx={{margin: 1}}
                            value={task.priority || ''}
                            onChange={e => setTask({...task, priority: e.target.value})}
                        >
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </TextField>

                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Add</Button>
                </DialogActions>
            </Dialog>

        </StyledWrapper>
    </>);
};

export default TaskForm;