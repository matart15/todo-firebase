import { useState } from "react";
import { Todo } from "../model/Todo"

export const AddTodo = ({addAction}: { 
  addAction: (detail: string) => Promise<void>
}) => {
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleChange = (event: React.FormEvent<HTMLInputElement>)  => {
    setMessage(event.currentTarget.value);
  };

  return <div>
    <input 
      type="text" 
      id="myInput"
      placeholder="Todo..."
      style={{
        width: 200
      }}
      maxLength={20}
      onChange={handleChange}
      value={message}/>
    <button 
      onClick= {async ()=> {
        setDisabled(true)
        await addAction(message)
        setDisabled(false)
        setMessage("");
        alert("todo added successfully")
      }}
      style={{
        borderRadius: "8px",
        border: "1px solid transparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: "500",
        fontFamily: "inherit",
        backgroundColor: "#1a1a1a",
        cursor: "pointer",
        transition: "border-color 0.25s",
        width: 100,
      }}
      disabled={disabled}
    >Add</button>
  </div>

}