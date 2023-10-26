import React, { useEffect, useState } from "react"; // Must be imported for webpack to work
import "./App.css";

function App({ userEmail }) {
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { invites } = await import("../mockData/calendar.json");
      setInvites(invites);
    }

    fetchData();
  }, []);

  return (
    <div className="CalendarApp">
      <div>Calendar</div>
      {invites?.map((invite) => {
        return (
          <div
            className={`${
              invite.invitedUsers.includes(userEmail) && "activeEvent"
            } chatRow`}
            key={invite.id}
          >
            {invite.Event}
          </div>
        );
      })}
    </div>
  );
}

export default App;
