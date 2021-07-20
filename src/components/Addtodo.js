import React from "react";
import { useDispatch } from "react-redux";
import "./addtodo.css";
import ch from "../assets/group.svg";
import { addTodo, updateTodo } from "../store/actions/todosAction";

function Addtodo({ todo, setTodo }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isCompleted: todo.isCompleted,
        date: todo.date,
        author: todo.author,
        uid: todo.uid,
      };

      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };

      dispatch(addTodo(newTodo));
    }
    setTodo({ name: "", isCompleted: false });
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className="group"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <input
          className="add"
          name="addtodo"
          type="text"
          placeholder="ADD TODO"
          autoFocus
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
      </div>
      <button className="btn" type="submit">
        <img src={ch} alt="ch" />
      </button>
    </form>
  );
}

export default Addtodo;
