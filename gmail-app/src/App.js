import React, { lazy, Suspense, useEffect, useState } from "react"; // Must be imported for webpack to work
import "./App.css";
import users from "./mockData/users.json";

const Chat = lazy(() => import("ChatApp/Chat"));
const Calendar = lazy(() => import("CalendarApp/Calendar"));

function App() {
  const [activeUserEmail, setActiveUserEmail] = useState(
    users.find((u) => u.active).email
  );

  useEffect(() => {
    const eventListener = (data) => {
      console.log("received event", data);
    };
    document.addEventListener("chat", eventListener);
    return () => document.removeEventListener("chat", eventListener);
  }, []);

  return (
    <>
      <header>
        <span className="logo">GMail </span>

        <div className="user-selection">
          <div> Switch User</div>
          <ul>
            {/* {users.map((user) => {
              return (
                <li
                  className={user.email === activeUserEmail && "activeUser"}
                  onClick={() => setActiveUserEmail(user.email)}
                >
                  {user.name}
                </li>
              );
            })} */}
          </ul>
        </div>
        <div className="searchDiv">
          <input
            className="searchbar"
            placeholder="Search Emails... nothing happens here"
          ></input>
        </div>
      </header>
      <div className="App">
        {/* <Suspense fallback={<div>Loading Chat...</div>}>
          <Chat userEmail={activeUserEmail} />
        </Suspense>
        <div className="container">Gmail home page</div>
        <Suspense fallback={<div>Loading Calendar...</div>}>
          <Calendar userEmail={activeUserEmail} />
        </Suspense> */}
      </div>
    </>
  );
}

export default App;
