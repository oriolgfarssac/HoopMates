import {useNavigate } from "react-router-dom";

const Settings = () =>{
    const history = useNavigate();
    const logOut = () =>{        
            history('/signUp/');
}

    return(
        <>
        <button onClick={logOut}>Logout</button>
        </>
    );
}
export default Settings;