import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import bg from "../assets/bgs.png";
import authbg from "../assets/auth.svg";
import "./signin.css";
import { Link } from "react-router-dom";
import { signUp } from "../store/actions/authActions";

function SignUp() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ name: "", email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/todos" />;

  return (
    <div className="signin">
      <img src={bg} alt="background" className="signin__bg" />
      <img src={authbg} alt="auth" className="signin__auth" />
      <form onSubmit={handleSubmit} className="signin__form">
        <h1>CREATE AN ACCOUNT</h1>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            name="name"
            type="name"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label for="emailInput">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email@domain.com"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label for="emailInput">Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <h3>
          Already have an account? Login{" "}
          <Link className="link" to="/login">
            here.
          </Link>
        </h3>
        <h4>
          By signing up, you agree to the Terms of Service and Privacy Policy
        </h4>
        <input type="submit" value="Sign up" className="btn-signup" />
      </form>
    </div>
  );
}

export default SignUp;
