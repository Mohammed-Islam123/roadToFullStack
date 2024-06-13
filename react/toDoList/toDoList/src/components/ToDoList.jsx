import task from "./clsTask";
import "../ToDoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function ToDoList({ toDos, setToDoS, setEditToDo, setInput }) {
  function handleDelete(ele) {
    setToDoS(toDos.filter((toDo) => toDo.id != ele.id));
  }
  function handleDone({ id }) {
    setToDoS(
      toDos.map((ele) =>
        ele.id == id ? { ...ele, completed: !ele.completed } : ele
      )
    );
  }

  function handleEdit(ele) {
    setEditToDo({ id: ele.id, editMode: true });
    setInput(ele.discription);
  }
  return (
    <>
      <ul>
        {toDos.map((ele, index) => {
          return (
            <li key={ele.id} className="toDoTask">
              <p className={"todo " + (ele.completed ? "done" : "")}>
                {ele.discription}{" "}
              </p>
              <div className="actions">
                {" "}
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="button-edit"
                  onClick={() => handleEdit(ele)}
                >
                  Edit
                </FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="button-delete"
                  onClick={() => handleDelete(ele)}
                >
                  Delete
                </FontAwesomeIcon>
                <FontAwesomeIcon
                  className="button-done"
                  onClick={() => handleDone(ele)}
                  icon={faCheck}
                >
                  Done
                </FontAwesomeIcon>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
