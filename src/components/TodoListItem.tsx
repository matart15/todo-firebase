import { useState } from "react";
import { Todo } from "../model/Todo"

export const TodoListItem = (
  {
    todo, 
    changeTodoCompletion,
    deleteAction  
  }: {
    todo: Todo,  
    changeTodoCompletion: ({id, completed}:{id: string, completed: boolean})=> Promise<void> 
    deleteAction: (id: string)=> Promise<void> 
  }
) => {
  const [disabled, setDisabled] = useState(false);
  const handleChange = (event: React.FormEvent<HTMLInputElement>)  => {
    changeTodoCompletion({id: todo.id, completed: event.currentTarget.checked});
  };

  return <div style={{
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between"
  }}>
    <input 
      type="checkbox" 
      checked={todo.completed}
      onChange={handleChange}
      style={{
        width: 20,
      }}
    />
    <div>{todo.detail}</div>
    <button 
      onClick= {async ()=> {
        setDisabled(true)
        await deleteAction(todo.id)
        setDisabled(false)
        alert("todo deleted successfully")
      }}
      style={{
        width: 20,
        height: 20
      }}
      disabled={disabled}
    >X</button>
  </div>

}