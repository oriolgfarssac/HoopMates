import { Link } from "react-router-dom";
import "../../styles/account.css";
import { useEffect, useState, ChangeEvent } from "react";

const account = () => {
  const [img, setImg] = useState<string>("/icons/usuario.png");

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

  const [userName, setUserName] = useState();

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
      const img = document.getElementById('file-upload-button') as HTMLInputElement | null;
      const name = document.getElementById('userInput') as HTMLInputElement | null;
      const posisio = document.getElementById('position') as HTMLInputElement | null;
      const preferit = document.getElementById('court') as HTMLInputElement | null;
      if(name && posisio && preferit && img){
        realUser.name = name.value;
        realUser.position = posisio.value;
        realUser.favourite = preferit.value;
        realUser.userImg = img.value;
        console.log(realUser);
        localStorage.setItem('usuaris', JSON.stringify(storedUsersReal));
      } 
    }
  }

  return (
    <>
      <div className="profileMain">
        
        <h1 className="profileTitle">My Profile</h1>
        <img src={img} alt="" className="profileImg" />
        <input type="file" accept="image/*" onChange={handleImageUpload} id="file-upload-button" />
        <br />
        <h1 className="nameUser">Username</h1>
        <input type="text" placeholder={userName} className="userInput" id="userInput" />
        <br />
        <h1 className="nameUser">Position</h1>
        <select name="Position" className="userInput" id="position">
          <option value="Pivot" className="userOption">Pivot</option>
          <option value="Playmaker" className="userOption">Playmaker</option>
          <option value="Wing" className="userOption">Wing</option>
        </select>
        <br />
        <h1 className="nameUser">Favourite Court</h1>
        <select name="Position" className="userInput" id="court">
          <option value="Big Court Glories" className="userOption">Big Court Glories</option>
          <option value="Small Court Glories" className="userOption">Small Court Glories</option>
          <option value="Big Court Poblenou" className="userOption">Big Court Poblenou</option>
        </select>
        <br />
        <button className="saveButton" onClick={saveChange}>Save Changes</button>
        <br />
        <Link to={'/courts/'}className="closeButton1"><button className="closeButton1">Close Profile</button></Link>
      </div>
    </>
  );
};

export default account;
