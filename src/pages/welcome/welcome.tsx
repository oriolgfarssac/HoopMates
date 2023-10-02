import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/welcome.css'
import { Link } from 'react-router-dom';

const welcome = () =>{

    return(
        <>
        <main className='container-fluid' id='mainDiv'>
        <img src="/icons/welcome.png" alt="" className='img1' />
        <br />
        <h1 className='title'>Hoop Mates</h1>
        <br />
        <h5 className='slogan'>Hoop!&nbsp;&nbsp; Shoot!&nbsp;&nbsp; Score!</h5>
        <br />
        <Link to={'/signUp'} className='button'>Let's go!</Link>
        </main>
        </>
    );
}

export default welcome;