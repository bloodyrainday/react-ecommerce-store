import React from "react";

import "./styles/Login.scss";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="login">
      <div className="login__container">
        <h2>Sign Up</h2>

        <div className="login__fields">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </div>
        <button>continue</button>
        <p className="login__have-account">
          already have an account? <span>login here</span>
        </p>

        <div className="login__agree">
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            by continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
