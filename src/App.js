
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUserName } from './features/Users';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUserName, setNewUserName] = useState("");
  return (
    <div className='App'>
      {" "}
      <div className='addUser'>
        <input type="text" placeholder='Name...' onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
        <button onClick={dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username }))}>Add User</button>
      </div>
      <div className='displayUsers'>
        {userList.map((users) => {
          return (
            <div>
              <h1>{users.name}</h1>
              <h1>{users.username}</h1>
              <input type="text" placeholder='Username...' />
              <button onClick={dispatch(updateUserName({ id: users.id, username: newUserName }))}>Update Username</button>
              <button onClick={dispatch(deleteUser({ id: users.id }))}>Delete Username</button>
            </div>
          )
        })}
      </div>
    </div>
  )



}

export default App;
