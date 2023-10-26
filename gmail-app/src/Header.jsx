import users from "./mockData/users.json";
import React from "react";

const Header = ({ activeUser, setActiveUser }) => {
  return (
    <header>
      <span className="logo">GMail </span>

      <div className="user-selection">
        <div> Switch User</div>
        <ul>
          {users.map((user) => {
            return (
              <li
                className={user.email === activeUser && "activeUser"}
                onClick={() => setActiveUser(user.email)}
              >
                {user.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="searchDiv">
        <input
          className="searchbar"
          placeholder="Search Emails... nothing happens here"
        ></input>
      </div>
    </header>
  );
};
export default Header;
