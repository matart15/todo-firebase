import './App.css'
import {TodoList} from "./components/TodoList"
import { Todo } from './model/Todo'
import { AddTodo } from './components/AddTodo'
import { useEffect, useState } from 'react'
import { listTodos } from './logics/listTodos'
import { addTodo } from './logics/addTodo'
import { changeTodoCompletion } from './logics/changeTodoCompletion'
import { deleteTodo } from './logics/deleteTodo'

const MAX_TODO_COUNT = 10;

function App() {
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])
  const [yetCompletedTodos, setYetCompletedTodos] = useState<Todo[]>([])
  const updateTodoList = () => {
    const s = listTodos().then((todos1) => {
      setCompletedTodos(todos1.filter(t => t.completed))
      setYetCompletedTodos(todos1.filter(t => !t.completed))
    });
  }
  useEffect(updateTodoList, [])
  return (
    <>
    <h2>TodoList</h2>
    {completedTodos.length + yetCompletedTodos.length < MAX_TODO_COUNT ? <AddTodo addAction={async (data) => {
      await addTodo(data)
      await updateTodoList()
    }}/>: <div>please remove some todos in order to add.</div>}
    <h3>TODO: </h3>
    {yetCompletedTodos.length > 0? <TodoList 
      todos={yetCompletedTodos}
      changeTodoCompletion={async (
        {id, completed}:{id: string, completed: boolean}
      ) => {
        await changeTodoCompletion({id, completed})
        await updateTodoList();
      }}
      deleteAction={async ( id: string) => {
        await deleteTodo({id})
        await updateTodoList();
      }}
    />: null}
    <h3>DONE: </h3>
    {completedTodos.length > 0? <TodoList 
      todos={completedTodos}
      changeTodoCompletion={async (
        {id, completed}:{id: string, completed: boolean}
      ) => {
        await changeTodoCompletion({id, completed})
        await updateTodoList();
      }}
      deleteAction={async ( id: string) => {
        await deleteTodo({id})
        await updateTodoList();
      }}
    />: null}
    </>
  )
}

export default App
