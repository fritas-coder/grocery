import React from "react";
import "../Styles/Login.css";
export default function Login() {
  return (
    <div className="login">
      <form action="" method="post">
        <div className="avatar-container">
          <img src="/img/imgG/bg2.jpeg" alt="avatar" className="avatar" />
        </div>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" />
            Remember me
          </label>
        </div>
        <div class="container2">
          <button type="button" class="cancelbtn">
            Cancel
          </button>
          <span class="psw">
            Forgot <a href="wa.me">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}
