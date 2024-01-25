import { useEffect, useState } from "react";
import './TodoForm.scss';
import { IconButton, ListItem, TextField, InputAdornment, Alert } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function TodoForm({ uuid, addData }) {
    const [data, setData] = useState({ id: uuid(), task: "", completed: false });
    const [isValid, setIsValid] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setData((prevData) => ({ ...prevData, task: e.target.value }));
    };

    useEffect(() => {
        if (data.task) {
            setIsValid(() => true)
            setIsError(false);
        }
        else {
            setIsValid(() => false)
        }
    }, [data.task])

    const settingUp = () => {
        setData((prevData) => ({ ...prevData, }));
    };


    const handleSubmission = (e) => {
        e.preventDefault();
        if (isValid) {
            settingUp();
            addData(data);
            setData(() => {
                return { ...data, task: "", id: uuid() }
            })

            setIsError(false);
        } else {
            // eslint-disable-next-line no-console
            console.error("Enter some task")
            setIsError(true);
        }
    };

    return (
        <ListItem sx={{ flexDirection: "column", gap: 1 }} >


            <form action="" onSubmit={handleSubmission} style={{ width: "100%" }}>
                <TextField id="filled-basic" label="Enter Task" variant="outlined" onChange={handleChange} value={data.task} sx={{ width: "100%" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="" edge="end" color="info" size="large" type="submit"  >
                                    <EditIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

            </form>

            {isError && <Alert className="alert" severity="error">
                You cannot submit empty task!
            </Alert>}
        </ListItem>

    );
}

export default TodoForm;
