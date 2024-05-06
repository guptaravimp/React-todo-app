import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem1 from "./components/TodoItem";
import TodoItem from "./components/TodoItem";
function App() {
  // const [count, setCount] = useState(0);
  const todoItems = [
    {
      name: "buy Milkbread",
      dueDate: "4/2/3323",
    },
    {
      name: "buy Milkcone",
      dueDate: "4/2/3323",
    },
    {
      name: "buy Milkchuha",
      dueDate: "4/2/3323",
    },
    {
      name: "buy Milksher",
      dueDate: "4/2/3323",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      {/* <AddTodo></AddTodo> */}
      <AddTodo></AddTodo>

      {/* <AddTodo></AddTodo> */}
      {/* <TodoItem
          todoDate="14/4/2023"
          todoName={"buy milk icecream"}
        ></TodoItem> */}

      <TodoItem todoItems={todoItems}></TodoItem>
    </center>
  );
}

export default App;
