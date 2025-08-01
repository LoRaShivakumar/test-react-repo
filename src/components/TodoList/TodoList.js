// src/components/TodoList/TodoList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './TodoList.css';

function TodoList() {
    const [tasks, setTasks] = useState([

        'Learn React',
        'Build a To-Do App',
        'Drink Water',
        'Take a Walk',
        'Read a Book',
        'Practice JavaScript',
        'Plan the Day',
        'Review Code',
        'Clean Workspace',
        'Write Journal'

    ]);

    const deleteTask = (indexToDelete) => {
        const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">
            <h1>My To-Do List</h1>
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        task={task}
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
