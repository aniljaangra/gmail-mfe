import React, {useEffect, useState} from 'react'; // Must be imported for webpack to work
import './App.css';

function App(props) {

  const [invites , setInvites] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const { invites } = await import('../mockData/calendar.json');
      setInvites(invites)
    }

    fetchData();
  }, []);
  const handleClick = (invite) => {
    console.log('Invite Clicked -> ',invite)
  }
  return (
    <div className="CalendarApp">
      <div>Calendar</div>
      {invites?.map(invite => {
        return <div onClick={()=> handleClick(invite)} className={"chatRow"} key={invite.id}>
          {invite.Event}
        </div>})}
    </div>
  );
}

export default App;
