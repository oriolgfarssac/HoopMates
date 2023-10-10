import '../../styles/signUp.css'
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useEffect} from 'react'

const signUp = () =>{

  useEffect(() => {

    const storedUsers = localStorage.getItem('usuaris');
    
    if (storedUsers) {
      try {
        const storedUsersReal = JSON.parse(storedUsers);
        console.log(storedUsersReal);
        storedUsersReal.forEach((user: any) => {
          user.loged = false;
        });
        localStorage.setItem('usuaris', JSON.stringify(storedUsersReal));
      } catch (error) {
        console.error('Error parsing stored users:', error);
      }
    }
  }, []);

  if (!localStorage.getItem('usuaris')) {
    localStorage.setItem('usuaris', JSON.stringify([]));
  }

    const history = useNavigate();

    const createAccount = () => {
        history('/register/');
    }

    const isValidEmail = (email:any) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }


    const checkUser = () => {
      let storedUsers = localStorage.getItem('usuaris');
      let storedUsersReal = [];
      
      if (storedUsers) {
        try {
          storedUsersReal = JSON.parse(storedUsers);
        } catch (error) {
          console.error('Error parsing stored users:', error);
        }
      }
      
      const email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement | null;
      const password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement | null;
  
      if (email && password) {
        if (email.value === '' || password.value === '') {
          alert('empty values');
        }else if (!isValidEmail(email.value)) {
          alert('Please introduce an email.')
        } 
        else {
          const user = storedUsersReal.find((thing: any) => (
            (thing.email === email.value && thing.password === password.value) ||
            (thing.username === email.value && thing.password === password.value)
          ));
          
          if (user) {
            user.loged = true;
            localStorage.setItem('usuaris', JSON.stringify(storedUsersReal));
            if(user.state == false){
            history('/account/');
            }
            else if(user.state == true){
            history('/courts/');
            }
            console.log(storedUsersReal);
          } else {
            alert('Login failed');
          }
        }
      }
  };
  
      

    return(
        <>
        <main className="container-fluid">
        <img src="/icons/usuario.png" alt="" className='imgUser'/>
        <br />
        <h1 className='title'> Account Sign In</h1>
        <br />
        <button className='signIn-button' onClick={createAccount}> Create account </button>
        <br />
        <input type="text" placeholder='Email...' className='input' id='email'/>
        <br />
        <input type="password" placeholder='Password...' className='input' id='password'/>
        <br />
        <button className='signIn-button' onClick={checkUser}> Sign in </button>
        <Link to={'/restorePassword/'} className='passwordForget'>Forgot your password?</Link>
        </main>
        </>
    );
}

export default signUp;