import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import { AuthProvider } from "../context/AuthContext";
import Login from "../pages/Login";
import AddTodo from "../pages/AddTodo";
import TodoDetail from "../pages/TodoDetail";
import { TodoProvider } from "../context/TodoContext";

const AuthLayout = () => (
  <AuthProvider>
    <TodoProvider>
      <Outlet />
    </TodoProvider>
  </AuthProvider>
);
const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <App />,
        path: "/",
        children: [
          {
            element: <AddTodo />,
            path: "/add"
          },
          {
            element: <TodoDetail />,
            path: "/todo/:todoId"
          }
        ]
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);

export default router;
