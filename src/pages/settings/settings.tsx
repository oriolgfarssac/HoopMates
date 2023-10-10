import {useNavigate } from "react-router-dom";
import '../../styles/settings.css'

const Settings = () =>{
    const history = useNavigate();

    const logOut = () =>{        
    history('/');
    }

    const switchAccount = () =>{        
        history('/signUp');
    }

    const goBack = () =>{
    history('/courts/');
    }

    const eliminateAccount = () => {
  const getStoredU = localStorage.getItem('usuaris');
  let storedUsersReal: any[] = [];
  if (getStoredU) {
    try {
      storedUsersReal = JSON.parse(getStoredU);
    } catch (error) {
      console.error('Error parsing stored users:', error);
    }
  }
  if(storedUsersReal){
    const realUser = storedUsersReal.find((user) => {
        return user.loged === true;
      });
      console.log(realUser);
      if (realUser) {
      const index = storedUsersReal.indexOf(realUser);
      if (index !== -1) {
        storedUsersReal.splice(index, 1);
        localStorage.setItem('usuaris', JSON.stringify(storedUsersReal));
        history('/signUp/');
      }
  }
  
}
}

    return(
        <>
        <div className="containerS">
        <img src="/icons/ajustes.png" className="icon" />
        <br />
            <h1 className="title"> Settings </h1>
            <br />
            <button onClick={switchAccount} className="button2"><img src="/icons/canviar.png" className="icon2" /> Switch Account </button>
            <br />
            <button onClick={logOut} className="button21"><img src="/icons/salir.png" className="icon2" /> Signout </button>
            <br />
            <button onClick={eliminateAccount} className="button23"><img src="/icons/borrar.png" className="icon2" /> Delete Account </button>
            <br />
            <img src="/icons/flecha.png" className="icon3" onClick={goBack}/>
        </div>
        </>
    );
}
export default Settings;