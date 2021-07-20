import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainPage from "./pages/MainPage";
import Nav from "./components/Nav";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./store/actions/authActions";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Router>
        <ToastContainer autoClose={4000} />
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/todos" component={MainPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
