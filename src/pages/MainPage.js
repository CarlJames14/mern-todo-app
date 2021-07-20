import React, { useState } from "react";
import Addtodo from "../components/Addtodo";
import ListTodo from "../components/ListTodo";
import "./mainpage.css";

import { useSelector } from "react-redux";

function MainPage() {
  const auth = useSelector((state) => state.auth);
  const [todo, setTodo] = useState({
    name: "",
    isCompleted: false,
  });
  return (
    <>
      {auth._id ? (
        <div className="todo">
          <h1 className="title">MY TODO'S</h1>
          <Addtodo todo={todo} setTodo={setTodo} />

          <div className="wrapper">
            <ListTodo setTodo={setTodo} />
          </div>
        </div>
      ) : (
        <div className="wrapper2">
          <ListTodo todo={todo} setTodo={setTodo} />
        </div>
      )}
    </>
  );
}

export default MainPage;
