import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { useLogout } from "./../hooks/useLogout";
import { useAuthContext } from "./../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <nav className={style.navbar}>
      <ul>
        <li className={style.title}>myMoney</li>
        <li>
          <Link to="/">Home </Link>{" "}
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">login</Link>{" "}
            </li>
            <li>
              <Link to="/signup">Signup</Link>{" "}
            </li>
          </>
        )}
        {user && (
          <>
            <li style={{ marginLeft: "10px" }}>hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                {" "}
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
