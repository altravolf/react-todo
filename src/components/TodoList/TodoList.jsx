import { useEffect, useState } from 'react';
import './TodoList.scss';
import { List, } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";
import { v4 as uuid } from "uuid";
import TodoForm from "../TodoForm/TodoForm";

const style = {
    width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: "auto", border: "1px solid lightblue", borderTop: "none",
    borderBottomLeftRadius: 5, borderBottomRightRadius: 5
}

const todoData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data) return data;
    return [];
}

function TodoList() {

    const [todos, setTodos] = useState(todoData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])



    const handleRemove = (taskId) => {
        setTodos(() => (
            todos.filter((el) => el.id !== taskId)
        ))
    }

    const handleCheckbox = (taskId) => {
        setTodos(() => {
            return todos.map((el) => {
                if (el.id === taskId) {
                    return { ...el, completed: !el.completed };
                } else {
                    return { ...el }
                }
            })
        })
    }

    const addData = (newItem) => {


        setTodos(() => {
            const data = [...todos, newItem]
            return data;
        });
    }


    return (
        <div className="TodoList">

            <div className="header">
                <h1>Todo List</h1>
            </div>

            <List sx={style} >
                {todos.map((value) => {
                    return <TodoItem value={value} key={value.id} handleRemove={handleRemove} handleCheckbox={handleCheckbox} />
                })}
                <TodoForm uuid={uuid} addData={addData} />
            </List>
        </div>
    );
}

export default TodoList;
