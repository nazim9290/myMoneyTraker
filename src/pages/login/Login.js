import React, { useState } from "react";
import style from "./Login.module.css";
import { useLogin } from "./../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <form onSubmit={handleSubmit} className={style["login-form"]}>
      {/* jodi class namer ajhe (-) thake taile amne class name dite hoy */}
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          {" "}
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
