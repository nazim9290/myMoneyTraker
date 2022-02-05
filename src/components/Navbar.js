import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li className={style.title}>myMoney</li>
        <li>
          <Link to="/login">login</Link>{" "}
        </li>
        <li>
          <Link to="/signup">Signup</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
