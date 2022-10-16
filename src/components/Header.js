import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log("context", user);
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Awesome Auth
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user?.displayName && <span>Welcome, {user.displayName}</span>}
      </div>
    </div>
  );
};

export default Header;
