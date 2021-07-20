import React from "react";
import logo from "../assets/logofinal.svg";
import "./nav.css";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../store/actions/authActions";

function Nav() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/");
  };

  return (
    <div className="nav">
      <div className="nav__left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link className="nav__logoText" to="/">
          tasklist
        </Link>
      </div>
      {user._id ? (
        <div className="nav__right">
          <a href="/todos" className="nav__linksL">
            Log in as {user.name}
          </a>
          <button onClick={() => handleSignOut()} className="nav__linksLB">
            <Link className="nav__linksL" to="/">
              Log out
            </Link>
          </button>
        </div>
      ) : (
        <div className="nav__right">
          <Link className="nav__links" to="/login">
            Log in
          </Link>
          <Link className="nav__links" to="/signup">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
