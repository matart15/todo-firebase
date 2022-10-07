import { Todo } from "../model/Todo"
import {TodoListItem}from "./TodoListItem"

export const TodoList = ({
  todos,
  changeTodoCompletion,
  deleteAction
}: {
  todos: Todo[]
  changeTodoCompletion: ({id, completed}:{id: string, completed: boolean})=> Promise<void> 
  deleteAction: (id: string)=> Promise<void> 
}) => {
  return <div
  style={{
  border: "1px solid",
  padding: "1px",
  width: "100%",
  margin: "1px",
  display: "flex",
  flexDirection: "column",
  justifyContent:"space-between",
  }}>
    {todos.map(t => 
      <TodoListItem 
        todo={t}
        changeTodoCompletion={changeTodoCompletion}
        deleteAction={deleteAction}
      />
    )}
    </div>
}