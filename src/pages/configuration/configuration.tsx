import { Link } from "react-router-dom";
import '../../styles/configuration.css'
const configuration = () =>{

    return(
        <>
<main className='mainContainer11'>
      <header className='header'>
        <Link to={'/account/'} className='account'><img src="/icons/usuario.png" className='account' /></Link>
        <h1 className='t1'> Support & FAQ </h1>
        <Link to={'/settings/'} className='account'><img src="/icons/ajustes.png" className='account'/></Link>
      </header>
      <ol className='list'>
        <li className="info1">
          <h2>Que és Hoop Mates?</h2>
          <p className="info11">
          Hoop Mates és una emocionant aplicació web creada per Oriol G.Farssac, com a projecte final per a The IT Academy. Aquesta innovadora aplicació web, està dissenyada per als amants del bàsquet que desitgen explorar i aprofitar al màxim les pistes públiques de Barcelona. Amb Hoop Mates, la comunitat de bàsquet de Barcelona té a la seva disposició una eina única que facilita la recerca, la descoberta i la connexió amb les pistes de la ciutat.
          </p>
        </li>
        <li className="info1">
          <h2>Que podem fer?</h2>
          <p className="info11">
          Hoop Mates et permet explorar una àmplia varietat de pistes de bàsquet a Barcelona. Ja sigui que estiguis cercant pistes a l'aire lliure o en instal·lacions cobertes, aquesta aplicació et proporciona informació detallada sobre la seva ubicació, disponibilitat i més.
          </p>
        </li>
        <li className="info1">
          <h2>Rebra actualitzacións?</h2>
          <p className="info11">
          Si, Hoop Mates, a mesura que anem millorant la vostra experiència, tenim previstes diverses actualitzacions emocionants per a Hoop Mates. L'objectiu principal és convertir Hoop Mates en una PWA (Progressive Web App). Què significa això? Una PWA és una aplicació web que es pot descarregar al vostre dispositiu mòbil i funcionarà com una aplicació nativa.
          </p>
        </li>
<br />
  </ol>
    <footer className='footer'>
      <Link to="/courts/" className='navIcon'><img src="/icons/main.png" alt="" className='navIcon'/></Link>
      <Link to="/rank/" className='navIcon'><img src="/icons/users.png" alt="" className='navIcon'/></Link>
      <Link to="/hotCourts/" className='navIcon'><img src="/icons/pelota.png" alt="" className='navIcon'/></Link>
      <Link to="/chat/" className='navIcon'><img src="/icons/team.png" alt="" className='navIcon'/></Link>
      <Link to="/configuration/" className='navIcon'><img src="/icons/help1.png" alt="" className='navIcon'/></Link>
    </footer>
    </main>
        </>
    );
}

export default configuration;