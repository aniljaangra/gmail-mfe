import React, { lazy, Suspense, useState } from "react"; // Must be imported for webpack to work
import "./App.css";
import ErrorService from "./ErrorService";
import users from "./mockData/users.json";
import Header from "./Header";

const Chat = lazy(() => import("ChatApp/Chat"));
const Calendar = lazy(() => import("CalendarApp/Calendar"));

function App() {
  const [activeUser, setActiveUser] = useState(
    users.find((u) => u.active).email
  );

  return (
    <>
      <Header activeUser={activeUser} setActiveUser={setActiveUser} />
      <div className="App">
        <Suspense fallback={<div>Loading Chat...</div>}>
          <Chat userEmail={activeUser} />
        </Suspense>
        <div className="container">
          Gmail home page
          <ErrorService />
        </div>
        <Suspense fallback={<div>Loading Calendar...</div>}>
          <Calendar userEmail={activeUser} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
