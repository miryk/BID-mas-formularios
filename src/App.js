import './App.css';
import { useState } from 'react';
import UserForm from './components/UserForm';
import UserFormResult from './components/UserFormResult'

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "", 
    lastName: "", 
    email: "",
    password: "",
    confirmPassword: ""
  })

  return (
    <div className="App">
      <h1 style={{margin: '15px 0'}}>Sign Up!</h1>
      <UserForm info={userInfo} setInfo={setUserInfo}/>

      <hr/>
      <h4 style={{margin: '15px 0'}}>Your Form Data:</h4>
      <UserFormResult info={userInfo} />
      <hr></hr>
    </div>
  );
}

export default App;
