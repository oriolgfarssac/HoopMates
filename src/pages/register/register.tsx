import '../../styles/register.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

interface User {
  userName: string;
  email: string;
  password: string;
  loged: boolean;
  liked: string[];
  position: string;
  favourite: string;
  userImg: string;
}

const Register: React.FC = () => {
  const history = useNavigate();

  const [alertMessage, setAlertMessage] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const displayAlert = (message: string) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
    history('/signUp/');
  };

  const createAccount = () => {
    const email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement | null;
    const password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement | null;

    if (email && password) {
    if(email.value == "" || password.value == ""){
      alert("Please fill the following inputs.");
    }
    else{
      const newUser: User = {
        userName: '',
        email: email.value,
        password: password.value,
        loged: false,
        liked: [],
        position: '',
        favourite: '',
        userImg: '/icons/usuario.png',
      };

      let storedUsers = localStorage.getItem('usuaris');
      const storedUsersReal: User[] = storedUsers ? JSON.parse(storedUsers) : [];
      storedUsersReal.push(newUser);

      localStorage.setItem('usuaris', JSON.stringify(storedUsersReal));
      displayAlert("You've been registered correctly!" + " Now please Sign In:");
      console.log(storedUsersReal);
    }
    }
  };

  return (
    <>
      <main className="container-fluid">
      {showAlert && (
        <div className="alertBox">
          <div className="alertContent">
            <h1 className='alert'>{alertMessage}</h1>
          </div>
          <button onClick={closeAlert} className='closeButton'>Sign In</button>
        </div>
      )}
        <img src="/icons/usuario.png" alt="" className='imgUser'/>
        <br />
        <h1 className='title'>Account Register</h1>
        <br />
        <input type="text" placeholder='Email...' className='input' id='email' />
        <br />
        <input type="password" placeholder='Password...' className='input' id='password' />
        <br />
        <button className='signIn-button' onClick={createAccount}>Create account</button>
        <Link to={'/signUp/'} className='return'>I've already got an account.</Link>
      </main>

    </>
  );
};

export default Register;
