import './TodoItem.scss';
import { ListItem, ListItemIcon, Checkbox, ListItemText, ListItemButton, IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function TodoItem({ value, handleRemove, handleCheckbox }) {
    const labelId = value.id;
    return (
        <ListItem
            key={value.id}
            secondaryAction={
                <IconButton edge="end" color="error" aria-label="comments" onClick={() => handleRemove(value.id)}>
                    <DeleteForeverIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        onClick={() => handleCheckbox(value.id)}
                        edge="start"
                        checked={value.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.task} />
            </ListItemButton>
        </ListItem>
    );

}

export default TodoItem;
