import {getTodoDocRef}from "../firebase"
import { updateDoc } from "firebase/firestore"; 

export const changeTodoCompletion = async ({
  id, completed
}:{
  id: string, completed: boolean
}): Promise<boolean> => {
  await updateDoc(getTodoDocRef(id), { completed });
  return true
}