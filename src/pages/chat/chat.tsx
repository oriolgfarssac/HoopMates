import { Link } from "react-router-dom";
import Clan from "../../components/clan"

const Clans = () =>{

    return(
        <>
<main className='mainContainer11'>
      <header className='header'>
        <Link to={'/account/'} className='account'><img src="/icons/usuario.png" className='account' /></Link>
        <h1 className='t1'>Hoopers Clans</h1>
        <Link to={'/settings/'} className='account'><img src="/icons/ajustes.png" className='account'/></Link>
      </header>
      <ol className='list'>
      <Clan
  name="Clan Title"
  description="A description about 100 words for your clan."
  maxClanMembers={50}
/>
      </ol>
    <footer className='footer'>
      <Link to="/courts/" className='navIcon'><img src="/icons/main.png" alt="" className='imgIcon'/></Link>
      <Link to="/rank/" className='navIcon'><img src="/icons/users.png" alt="" className='imgIcon'/></Link>
      <Link to="/hotCourts/" className='navIcon'><img src="/icons/pelota.png" alt="" className='imgIcon'/></Link>
      <Link to="/chat/" className='navIcon'><img src="/icons/team1.png" alt="" className='imgIcon'/></Link>
      <Link to="/configuration/" className='navIcon'><img src="/icons/help.png" alt="" className='imgIcon'/></Link>
    </footer>
    </main>
        </>
    );
}

export default Clans;