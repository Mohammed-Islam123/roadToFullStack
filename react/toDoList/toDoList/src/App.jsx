import "./App.css";
import From from "./components/Form";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ToDoList from "./components/ToDoList";

function App() {
  const [input, setInput] = useState("");
  const [toDoS, setToDoS] = useState([]);
  const [editToDo, setEditToDo] = useState({ editMode: false });
  const savedTasks = JSON.parse(window.localStorage.getItem("todos")) || [];
  useEffect(() => {
    setToDoS(savedTasks);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoS));
  }, [toDoS]);

  return (
    <div className="wrapper">
      <div className="header">
        <Header title="Ultimate To do List" />
      </div>

      <div className="form">
        <From
          input={input}
          setInput={setInput}
          toDoS={toDoS}
          setToDoS={setToDoS}
          editToDo={editToDo}
          setEditToDo={setEditToDo}
        />
      </div>
      <div className="toDoWrapper">
        <ToDoList
          toDos={toDoS}
          setToDoS={setToDoS}
          setEditToDo={setEditToDo}
          setInput={setInput}
        />
      </div>
    </div>
  );
}

export default App;
