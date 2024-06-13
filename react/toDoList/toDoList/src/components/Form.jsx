import { useEffect } from "react";
import clsTask from "./clsTask";
import { v4 as uuidV4 } from "uuid";
function From({ input, setInput, toDoS, setToDoS, editToDo, setEditToDo }) {
  const handleSubmit = (eve) => {
    eve.preventDefault();
    if (!editToDo.editMode) {
      setToDoS([...toDoS, new clsTask(uuidV4(), input, false)]);
    } else {
      setToDoS(
        toDoS.map((ele) => {
          if (ele.id == editToDo.id) {
            ele.discription = input;
          }
          return ele;
        })
      );
      setEditToDo({ editMode: false });
    }
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What do you want to do ?"
          required
          onChange={(eve) => {
            setInput(eve.target.value);
          }}
          value={input}
          className="inputTask"
        />
        <button className="submitTask" type="submit">
          {editToDo.editMode ? "Edit" : "Add"}{" "}
        </button>
      </form>
    </>
  );
}

export default From;
