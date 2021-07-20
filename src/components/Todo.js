import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";

import { deleteTodo, checkTodo } from "../store/actions/todosAction";

const UseStyles = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #ffffff",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
  },
  grayStyle: {
    color: "#e3e3e3",
  },
  title: {
    color: "#ffffff",
    fontWeight: "600",
  },
  isComplete: {
    color: "green",
    opacity: "1",
  },
  checked: {
    opacity: ".5",
    backgroundColor: "#58bd90",
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #ffffff",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "line-through",
    transition: "all 0.3s ease",
  },
});

function Todo({ todo, setTodo, todos }) {
  const classes = UseStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleUpdateClick = (id) => {
    const foundTodo = todos.find((todo) => todo._id === id);
    setTodo(todo);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };
  return (
    <>
      {todo.isCompleted ? (
        <div className={classes.checked}>
          <div>
            <Typography variant="h5" className={classes.title}>
              {todo.name}
            </Typography>
            <Typography variant="body2" className={classes.grayStyle}>
              Author: me
            </Typography>
            <Typography variant="body2" className={classes.grayStyle}>
              Added: {moment(todo.date).fromNow()}
            </Typography>
          </div>
          <div>
            {auth._id && auth._id === todo.uid ? (
              <ButtonGroup
                size="small"
                aria-label="outlined primary button group"
              >
                <Button onClick={() => handleCheck(todo._id)}>
                  <CheckCircle color="action" className={classes.isComplete} />
                </Button>
                <Button onClick={() => handleUpdateClick()}>
                  <Create color="primary" />
                </Button>
                <Button onClick={() => handleDelete(todo._id)}>
                  <Delete color="secondary" />
                </Button>
              </ButtonGroup>
            ) : null}
          </div>
        </div>
      ) : (
        <div className={classes.todoStyle}>
          <div>
            <Typography variant="h5" className={classes.title}>
              {todo.name}
            </Typography>
            <Typography variant="body2" className={classes.grayStyle}>
              Author: me
            </Typography>
            <Typography variant="body2" className={classes.grayStyle}>
              Added: {moment(todo.date).fromNow()}
            </Typography>
          </div>
          <div>
            {auth._id && auth._id === todo.uid ? (
              <ButtonGroup
                size="small"
                aria-label="outlined primary button group"
              >
                <Button onClick={() => handleCheck(todo._id)}>
                  <CheckCircle color="action" />
                </Button>
                <Button onClick={() => handleUpdateClick()}>
                  <Create color="primary" />
                </Button>
                <Button onClick={() => handleDelete(todo._id)}>
                  <Delete color="secondary" />
                </Button>
              </ButtonGroup>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default Todo;
