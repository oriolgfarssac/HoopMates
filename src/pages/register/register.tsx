import '../../styles/register.css';
import { Link, useNavigate } from 'react-router-dom';
import Users from '../../data/accounts';

interface User {
  userName: string;
  email: string;
  password: string;
  loged: boolean;
  liked: string[];
  position: string;
  favourite: string;
  userImg: string;
  state: boolean;
  instagram: string;
  twitter: string;
}

const Register: React.FC = () => {
  const history = useNavigate();

  const users = [...Users];

  const isValidEmail = (email:any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const createAccount = () => {
    const email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement | null;
    const password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement | null;

    if (email && password) {
    if(email.value == "" || password.value == ""){
      alert("Please fill the following inputs.");
    }
    else if (!isValidEmail(email.value)) {
      alert('Please introduce an email.')
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
        state: false,
        instagram: '',
        twitter: '',
      };

      let storedUsers = localStorage.getItem('usuaris');
      const storedUsersReal: User[] = storedUsers ? JSON.parse(storedUsers) : [];
      storedUsersReal.push(newUser);
      localStorage.setItem('usuaris', JSON.stringify(users));
      localStorage.setItem('usuaris', JSON.stringify(storedUsersReal));
      history('/signUp/');
      alert("You've been registered correctly!")
      console.log(storedUsersReal);
    }
    }
  };

  return (
    <>
      <main className="container-fluid">
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
