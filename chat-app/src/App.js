import React, {useEffect, useState} from 'react'; // Must be imported for webpack to work
import './App.css';

function App({ userEmail : currentUserEmail}) {

    const [users , setUsers] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const users = await import('../mockData/users.json');
            setUsers(users.users)
        }

        fetchData();
    }, []);

  const handleClick = (user) => {
      const customEvent = new CustomEvent('chat', {
          detail: { message: 'Hello from Chat User' },
      });
      document.dispatchEvent(customEvent);
    console.log('User Clicked -> ',user)
  }

  return (
    <div className="ChatApp">
      <div>Chat</div>
      <div>
      {users?.map(user => {
          return <div
              onClick={()=> handleClick(user)}
              className={`${currentUserEmail === user.email && "activeUser"} chatRow `}
              key={user.id}>
              {user.name}
          </div>
      })}
      </div>
    </div>
  );
}

export default App;