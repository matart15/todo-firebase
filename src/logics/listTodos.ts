import { getTodoCollection } from "../firebase";
import { getDocs } from "firebase/firestore"; 
import { Todo } from "../model/Todo";
export const listTodos = async (): Promise<Todo[]> => {
  const todosRawdata = await getDocs(getTodoCollection());
  const todos: Todo[] = []
  todosRawdata.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const data = doc.data()
    todos.push({id: doc.id, detail: data.detail, completed: data.completed})
  });
  return todos
}