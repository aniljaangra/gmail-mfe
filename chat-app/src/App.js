import React, { useEffect, useState } from "react"; // Must be imported for webpack to work
import "./App.css";

function App({ userEmail: currentUserEmail }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const users = await import("../mockData/users.json");
      setUsers(users.users);
    }

    fetchData();
  }, []);

  const reportError = () => {
    const customEvent = new CustomEvent("error", {
      detail: {
        message: "Simulated Error , should be called from Error Boundary",
      },
    });
    document.dispatchEvent(customEvent);
  };

  return (
    <div className="ChatApp">
      <h3>Chat</h3>
      <div>
        {users?.map((user) => {
          return (
            <div
              className={`${
                currentUserEmail === user.email && "activeUser"
              } chatRow `}
              key={user.id}
            >
              {user.name}
            </div>
          );
        })}
        <div className="chatRow errorRow" onClick={reportError}>
          Throw Error
        </div>
      </div>
    </div>
  );
}

export default App;
