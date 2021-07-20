import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../store/actions/todosAction";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  font: {
    color: "#fff",
    fontWeight: "600",
  },
  list: {
    margin: "20px auto",
    padding: "0 20px",
  },
});

function ListTodo({ setTodo }) {
  const auth = useSelector((state) => state.auth);
  const todos = useSelector((state) => state.todos);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // console.log(todos._id);

  if (!auth._id) return <Redirect to="/login" />;

  return (
    <div className={classes.list}>
      <Typography variant="h4" className={classes.font}>
        {todos.length <= 0 ? "Awesome you don't have any Task." : "Your Tasks."}
      </Typography>
      {todos &&
        todos.map((todo) => {
          return <Todo todo={todo} key={todo._id} setTodo={setTodo} />;
        })}
    </div>
  );
}

export default ListTodo;
