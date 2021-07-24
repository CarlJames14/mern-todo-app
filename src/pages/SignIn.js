import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import bg from "../assets/bgs.png";
import authimg from "../assets/auth.svg";
import "./signin.css";
import { Link } from "react-router-dom";
import { signIn } from "../store/actions/authActions";

function SignIn() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/todos" />;

  return (
    <>
      <div className="signin">
        <img src={bg} alt="background" className="signin__bg" />
        <img src={authimg} alt="auth" className="signin__auth" />
        <form onSubmit={handleSubmit} className="signin__form">
          <h1>LOG IN TO TASKLIST</h1>
          <div className="form-group">
            <label for="emailInput">Email</label>
            <input
              name="email"
              type="email"
              placeholder="email@domain.com"
              value={creds.email}
              onChange={(e) => setCreds({ ...creds, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label for="emailInput">Password</label>
            <input
              name="password"
              type="password"
              placeholder="password"
              value={creds.password}
              onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            />
          </div>
          <h3>
            Don't have an account? SignUp{" "}
            <Link className="link" to="/signup">
              here.
            </Link>
          </h3>
          <input type="submit" value="Log in" className="btn" />
        </form>
      </div>
    </>
  );
}

export default SignIn;
