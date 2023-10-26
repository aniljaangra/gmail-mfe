import React, {lazy, Suspense, useEffect, useState} from 'react'; // Must be imported for webpack to work
import './App.css';

const Chat = lazy(() => import('ChatApp/Chat'));
const Calendar = lazy(() => import('CalendarApp/Calendar'));

function App() {
  const [users, setUsers] = useState();
  const [currentUserEmail, setCurrentUserEmail] = useState('user1@gmail.com');

  useEffect(() => {
    const eventListener = (data) => {
      console.log('received event', data)
    }
    document.addEventListener('chat', eventListener)
    return () => document.removeEventListener('chat', eventListener)
  }, []);

  return (
    <>
    <header>
      <span className='logo'>Gmail App</span>
      <div className='searchDiv' ><input className='searchbar'placeholder='Search Emails'></input></div>
      <span className='profile'>Profile</span>
    </header>
    <div className="App">
      <Suspense fallback={<div>Loading Chat...</div>}>
        <Chat userEmail={currentUserEmail}/>
      </Suspense>
      <div className="container">Gmail home page</div>
      <Suspense fallback={<div>Loading Chat...</div>}>
        <Calendar userEmail={currentUserEmail} />
      </Suspense>
    </div>
    </>
  );
}

export default App;