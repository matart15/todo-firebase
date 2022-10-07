import {getTodoDocRef}from "../firebase"
import { deleteDoc } from "firebase/firestore"; 

export const deleteTodo = async ({
  id
}:{
  id: string
}): Promise<boolean> => {
  await deleteDoc(getTodoDocRef(id));
  return true
}