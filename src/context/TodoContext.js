import { createContext, useContext, useEffect, useState } from "react";
import { onSnapshot, collection, where, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "./AuthContext";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const todoRef = collection(db, "todo");
    console.log(user.uid);
    // const q = query(todoRef, where("uid", "==", user.uid));
    const unsub = onSnapshot(todoRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setTodoList(data);
    });
    return () => {
      unsub();
    };
  }, [db]);

  // console.log(todoList);
  return (
    <TodoContext.Provider value={{ todoList }}>{children}</TodoContext.Provider>
  );
};
