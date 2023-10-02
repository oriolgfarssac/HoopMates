import { Link } from "react-router-dom";
import '../../styles/restorepassword.css'

const restorePassword = () => {

    return(
    <>
        <main className="container-fluid">
        <img src="/icons/key.png" alt="" className="imgRestore" />
        <br />
        <h1 className='title'> Account Sign In</h1>
        <br />
        <p className="textInfo">Please entroduce your email so we can send you a recovery link.</p>
        <input type="email" placeholder='Email...' className='input' id='email'/>
        <br />
        <button className='signIn-button' > Send Messatge </button>
        <br />
        <Link to={'/signUp/'} className="linkBack"> I remember my password! </Link>
        </main>
    </>
    );

}

export default restorePassword;