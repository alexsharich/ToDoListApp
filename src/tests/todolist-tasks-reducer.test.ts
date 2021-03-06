import { TodolistType } from "../api/todolistApi";
import { TasksStateType } from "../AppWithRedux";
import { tasksReducer } from "./tasks-reducer";
import {  addTodolistThunkCreator, TodolistsDomainType, todolistsReducer } from "./todolist-reducer";

test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistsState: Array<TodolistsDomainType> = [];
    const todolist: TodolistType = {
        title: 'New Todolist',
        order: 0,
        addedDate: '',
        id: 'werwerwer'
    }
    const action = addTodolistThunkCreator.fulfilled({ todolist },'requestId',todolist.title);

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.payload.todolist.id);
    expect(idFromTodolists).toBe(action.payload.todolist.id);
});
