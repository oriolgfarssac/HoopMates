import "../../styles/account.css";
import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const account = () => {
  const history = useNavigate();
  const [img, setImg] = useState<string>("/icons/usuario.png");
  const [userNameCopy, setUserName] = useState();
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && e.target.result) {
          setImg(e.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  

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
      setUserName(realUser.username);
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
      const posisio = document.getElementById('position') as HTMLInputElement | null;
      const preferit = document.getElementById('court') as HTMLInputElement | null;
      if(name && posisio && preferit){
        realUser.userName = name.value;
        realUser.position = posisio.value;
        realUser.favourite = preferit.value;
        localStorage.setItem('usuaris', JSON.stringify(storedUsersReal));
        console.log(realUser);
        history('/courts/');
      } 
    }
  }
        
  return (
    <>
      <div className="profileMain">
        <div className="back">
        <h1 className="profileTitle">My Profile</h1>
        <img src={img} alt="" className="profileImg" />
        <input type="file" accept="image/*" name="image" onChange={handleImageUpload} />
        <br />
        <h1 className="nameUser">Username</h1>
        <input type="text" value={userNameCopy} className="input" id="userInput" />
        <br />
        <h1 className="nameUser">Court Position</h1>
        <select name="Position" className="input" id="position">
          <option value="Pivot" className="userOption">Pivot</option>
          <option value="Playmaker" className="userOption">Playmaker</option>
          <option value="Wing" className="userOption">Wing</option>
        </select>
        <br />
        <h1 className="nameUser">Most Played Court</h1>
        <select name="Position" className="input" id="court">
          <option value="Big Court Glories" className="userOption">Big Court Glories</option>
          <option value="Small Court Glories" className="userOption">Small Court Glories</option>
          <option value="Big Court Poblenou" className="userOption">Big Court Poblenou</option>
        </select>
        <br />
        <br />
        <button className="button" onClick={saveChange}>Save Changes</button>
        </div>
        <br />
      </div>
    </>
  );
};

export default account;
