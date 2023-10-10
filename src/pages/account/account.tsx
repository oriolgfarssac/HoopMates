import "../../styles/account.css";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const account = () => {
  const history = useNavigate();
  const [userNameR, setUserName] = useState();
  const [instagramR, setInstagram] = useState();
  const [twitterR, setTwitter] = useState();
  const [position, setPosition] = useState();
  const [favourite, setFavourite] = useState();

  useEffect(() => {
    const getStoredU = localStorage.getItem("usuaris");
    let storedUsersReal: any[] = [];

    if (getStoredU) {
      try {
        storedUsersReal = JSON.parse(getStoredU);
      } catch (error) {
        console.error("Error parsing stored users:", error);
      }
    }

    const realUser = storedUsersReal.find((user) => {
      return user.loged === true;
    });
    
    if (realUser) {
      setUserName(realUser.userName);
      setInstagram(realUser.instagram);
      setFavourite(realUser.favourite);
      setPosition(realUser.position);
      setTwitter(realUser.twitter);
    }
  }, []);

  const saveChange = () => {
    const getStoredU = localStorage.getItem("usuaris");
    let storedUsersReal: any[] = [];

    if (getStoredU) {
      try {
        storedUsersReal = JSON.parse(getStoredU);
      } catch (error) {
        console.error("Error parsing stored users:", error);
      }
    }

    const realUser = storedUsersReal.find((user) => {
      return user.loged === true;
    });

    if(realUser){
      const name = document.getElementById('userInput') as HTMLInputElement | null;
      const instagram = document.getElementById('userInsta') as HTMLInputElement | null;
      const twitterHT = document.getElementById('userX') as HTMLInputElement | null;
      const posisio = document.getElementById('position') as HTMLInputElement | null;
      const preferit = document.getElementById('court') as HTMLInputElement | null;
      if(name && posisio && preferit){
      if(name.value == ""){
        alert("Please introduce a username.");
      }
      else if(name && instagram && posisio && preferit && twitterHT){
        realUser.userName = name.value;
        realUser.position = posisio.value;
        realUser.favourite = preferit.value;
        realUser.instagram = instagram.value;
        realUser.twitter = twitterHT.value;
        console.log(twitterHT.value);
        realUser.state = true;
        localStorage.setItem('usuaris', JSON.stringify(storedUsersReal));
        console.log(realUser);
        history('/courts/');
      } 
      } 
    }
  }

  const goBack = () =>{
    history('/courts/');
    }
        
  return (
    <>
      <div className="profileMain">
      <h1 className="userAccoutName">{userNameR}</h1>
        <br />
        <div className="inputContainer">
        <img src="/icons/username.png" className="iconInput" />
        <input type="text" className="accountInput" defaultValue={userNameR} placeholder={"Username"} id="userInput" />
        </div>
        <br />
        <div className="inputContainer">
          <img src="/icons/instagram.png" className="iconInput" />
        <input type="text" className="accountInput" defaultValue={instagramR} placeholder={"Instagram Tag Without @"} id="userInsta" />
        </div>
        <br />
        <div className="inputContainer">
          <img src="/icons/twitter.png" className="iconInput" />
        <input type="text" className="accountInput" defaultValue={twitterR} placeholder={"Twitter Tag Without @"} id="userX" />
        </div>
        <br />
        <div className="inputContainer">
        <img src="/icons/position.png" className="iconInput" />
        <select name="Position" className="accountInput" defaultValue={position} id="position">
        <option disabled selected>Court Positions</option>
          <option value="Pivot" className="userOption">Pivot</option>
          <option value="Playmaker" className="userOption">Playmaker</option>
          <option value="Wing" className="userOption">Wing</option>
        </select>
        </div>
        <br />
        <div className="inputContainer">
        <img src="/icons/court.png" className="iconInput" />
        <select name="Position" className="accountInput" defaultValue={favourite} id="court">
        <option disabled selected>Court Locations</option>
          <option value="Plaça Glòries Gran" className="userOption">Plaça Glòries Gran</option>
          <option value="Parc del Poblenou" className="userOption">Parc del Poblenou</option>
          <option value="Plaça Glòries Petita" className="userOption">Plaça Glòries Petita</option>
          <option value="Parc de la Barceloneta" className="userOption">Parc de la Barceloneta</option>
          <option value="Parc de l'Espanya" className="userOption">Parc de l'Espanya</option>
          <option value="Bon Pastor" className="userOption">Bon Pastor</option>
          <option value="Parc del Clot" className="userOption">Parc del Clot</option>
          <option value="Escola Industrial" className="userOption">Escola Industrial</option>
        </select>
        </div>
        <br />
        <button className="buttonAccount" onClick={saveChange}>Save Changes</button>
        <br />
        <img src="/public/icons/flecha.png" className="icon3" onClick={goBack}/>
      </div>
    </>
  );
};

export default account;
