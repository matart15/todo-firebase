import {getTodoCollection}from "../firebase"
import { addDoc } from "firebase/firestore"; 

export const addTodo = async (data: string): Promise<boolean> => {
  const newTodo = {detail: data, completed: false}
  await addDoc(getTodoCollection(), newTodo);
  return true
}