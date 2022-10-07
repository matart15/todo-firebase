
import { firebaseConfig } from "./firebaseConfig"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, doc, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const TODO_COLLECTION_NAME = "todos"

export const getTodoCollection = () => collection(db, TODO_COLLECTION_NAME)
export const getTodoDocRef = (todoId: string) => doc(db, TODO_COLLECTION_NAME, todoId)