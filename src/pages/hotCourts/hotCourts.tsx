import { Link } from 'react-router-dom';

const hotCourts = () =>{

    return(
        <>
<main className='mainContainer11'>
      <header className='header'>
        <Link to={'/account/'} className='account'><img src="/icons/usuario.png" className='account' /></Link>
        <h1 className='t1'>Hot Courts</h1>
        <Link to={''} className='account'><img src="/icons/ajustes.png" className='account'/></Link>
      </header>
      <ol className='list'>

      </ol>
    <footer className='footer'>
      <Link to="/courts/" className='navIcon'><img src="/icons/main.png" alt="" className='navIcon'/></Link>
      <Link to="/rank/" className='navIcon'><img src="/icons/users.png" alt="" className='navIcon'/></Link>
      <Link to="/hotCourts/" className='navIcon'><img src="/icons/pelota2.png" alt="" className='navIcon'/></Link>
      <Link to="/chat/" className='navIcon'><img src="/icons/chat.png" alt="" className='navIcon'/></Link>
      <Link to="/configuration/" className='navIcon'><img src="/icons/help.png" alt="" className='navIcon'/></Link>
    </footer>
    </main>
        </>
    );
}

export default hotCourts;