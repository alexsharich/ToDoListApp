import React, { useReducer, useState } from 'react';
/* import logo from './logo.svg';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';
import { AddItemForm } from './components/AddItemForm';
import { addTodolistAC, changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC, TodolistsDomainType, todolistsReducer } from './tests/todolist-reducer';
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer } from './tests/tasks-reducer';
import { TaskStatuses, TodoTaskPriority } from './api/todolistApi';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}
export type TasksStateType = {
  [key: string]: Array<TaskType>
}
export type TodolistType = {
  id: string
  title: string
  filter: FilterValueType
}
export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

  let todolistId1 = v1();
  let todolistId2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistsDomainType>>([
    { id: todolistId1, title: 'What to learn', filter: 'all', addedDate: '', order: 0 },
    { id: todolistId2, title: 'What to buy', filter: 'all', addedDate: '', order: 0 }
  ])

  let [tasks, dispatchToTaskReducer] = useState<TasksStateType>({
    [todolistId1]: [
      { id: v1(), title: 'HTML&CSS', status: TaskStatuses.Completed, todolistId: todolistId1,startDate: '',deadLine:'',addedDate:'',order:0,priority:TodoTaskPriority.Hi,description:''  },
      { id: v1(), title: 'REACT', status: TaskStatuses.Completed, todolistId: todolistId1,startDate: '',deadLine:'',addedDate:'',order:0,priority:TodoTaskPriority.Hi,description:''   },
      { id: v1(), title: 'JS', status: TaskStatuses.Completed, todolistId: todolistId1,startDate: '',deadLine:'',addedDate:'',order:0,priority:TodoTaskPriority.Hi,description:''   }
    ],
    [todolistId2]: [
      { id: v1(), title: 'book', status: TaskStatuses.Completed, todolistId: todolistId2,startDate: '',deadLine:'',addedDate:'',order:0,priority:TodoTaskPriority.Hi,description:''   },
      { id: v1(), title: 'milk', status: TaskStatuses.Completed, todolistId: todolistId2,startDate: '',deadLine:'',addedDate:'',order:0,priority:TodoTaskPriority.Hi,description:''   },
      { id: v1(), title: 'oil', status: TaskStatuses.Completed, todolistId: todolistId2,startDate: '',deadLine:'',addedDate:'',order:0,priority:TodoTaskPriority.Hi,description:''   }
    ],
  })

  const removeTask = (id: string, todolistId: string) => {
    const action = removeTaskAC(id, todolistId)
    dispatchToTaskReducer(action)
  }
  const addTask = (newTitleTask: string, todolistId: string) => {
    const action = addTaskAC(newTitleTask, todolistId)
    dispatchToTaskReducer(action)
  }
  const changeStatus = (id: string, isDone: boolean, todolistId: string) => {
    const action = changeTaskStatusAC(id, isDone, todolistId)
    dispatchToTaskReducer(action)
  }
  const changeTaskTitle = (id: string, newTaskTitle: string, todolistId: string) => {
    const action = changeTaskTitleAC(id, newTaskTitle, todolistId)
    dispatchToTaskReducer(action)
  }

  const removeTodolist = (todolistId: string) => {
    const action = removeTodolistAC(todolistId)
    dispatchToTaskReducer(action)
    dispatchToTodolistReducer(action)
  }
  const addTodolist = (newTodolistTitle: string) => {
    const action = addTodolistAC(newTodolistTitle)
    dispatchToTodolistReducer(action)
    dispatchToTaskReducer(action)
  }
  const changeTodolistTitle = (id: string, newTodolistTitle: string) => {
    const action = changeTodolistTitleAC(id, newTodolistTitle)
    dispatchToTodolistReducer(action)
  }
  const changeFilter = (todolistId: string, value: FilterValueType) => {
    const action = changeTodolistFilterAC(todolistId, value)
    dispatchToTodolistReducer(action)
  }


  return (
    <div className="App">
      <AddItemForm addItem={addTodolist} />
      {todolists.map(tl => {

        let allTasksForTodolist = tasks[tl.id]
        let tasksForTodolist = allTasksForTodolist

        if (tl.filter === 'active') {
          tasksForTodolist = allTasksForTodolist.filter(f => f.isDone === false)
        }
        if (tl.filter === 'completed') {
          tasksForTodolist = allTasksForTodolist.filter(f => f.isDone === true)
        }
        return (
          <Todolist key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeStatus={changeStatus}
            changeTaskTitle={changeTaskTitle}
            changeTodolistTitle={changeTodolistTitle}
            filter={tl.filter}
            removeTodolist={removeTodolist} />
        )
      })}

    </div>
  );
}

export default App;
 */