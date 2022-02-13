import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TaskStatuses, TaskType } from "./api/todolistApi";

import { AddItemForm } from "./components/AddItemForm";
import { EditableSpan } from "./components/EditableSpan";
import { Task } from "./components/Task";
import { fetchTasksThunkCreator } from "./tests/tasks-reducer";
import { FilterValueType } from "./tests/todolist-reducer";

type TodolistPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValueType
    changeFilter: (todolistID: string, value: FilterValueType) => void
    addTask: (todolistID: string, newTitleTask: string) => void
    removeTask: (id: string, todolistID: string) => void
    changeStatus: (id: string, status: TaskStatuses, todolistID: string) => void
    changeTaskTitle: (id: string, newValue: string, todolistID: string) => void
    changeTodolistTitle: (id: string, newValue: string) => void
    removeTodolist: (todolistId: string) => void
}

export const Todolist = React.memo((props: TodolistPropsType) => {

    const onAllClickHandler = useCallback(() => props.changeFilter(props.id, 'all'), [props.changeFilter, props.id])
    const onActiveClickHandler = useCallback(() => props.changeFilter(props.id, 'active'), [props.changeFilter, props.id])
    const onCompletedClickHandler = useCallback(() => props.changeFilter(props.id, 'completed'), [props.changeFilter, props.id])

    const removeTodolistHandler = () => props.removeTodolist(props.id)
    const changeTodolistTitle = useCallback((newValue: string) => props.changeTodolistTitle(props.id, newValue), [ props.id,props.changeTodolistTitle])
    const addTask = useCallback((newTaskTitle: string) => props.addTask(props.id, newTaskTitle), [props.id, props.addTask])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasksThunkCreator(props.id))
    }, [])

    let tasksForTodolist = props.tasks

    if (props.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (props.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed)
    }

    return (
        <div>
            <h3><EditableSpan title={props.title} onChange={changeTodolistTitle} /><button onClick={removeTodolistHandler}>X</button></h3>
            <AddItemForm addItem={addTask} />
            <div>
                {tasksForTodolist.map(t => <Task key={t.id}
                    task={t}
                    removeTask={props.removeTask}
                    changeStatus={props.changeStatus}
                    changeTaskTitle={props.changeTaskTitle}
                    todolistId={props.id}
                />)}
            </div>
            <div>
                <button className={props.filter === 'all' ? 'activeButton' : ''}
                    onClick={onAllClickHandler}>All</button>
                <button className={props.filter === 'active' ? 'activeButton' : ''}
                    onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? 'activeButton' : ''}
                    onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
})

