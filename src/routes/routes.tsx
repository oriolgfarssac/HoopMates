import { BrowserRouter, Routes, Route} from 'react-router-dom';
import WelcomePage from '../pages/welcome/welcome';
import SignUp from '../pages/signUp/signUp';
import Rank from '../pages/users/users';
import Courts from '../pages/courts/courts';
import HotCourts from '../pages/hotCourts/hotCourts';
import Chat from '../pages/chat/Events';
import Configuration from '../pages/configuration/configuration';
import Register from '../pages/register/register'
import RestorePassword from '../pages/restorePassword/restorePassword';
import Account from '../pages/account/account';
import Settings from '../pages/settings/settings';
import CreateEvent from '../pages/createEvent/createEvent';
const realRoute = () =>{
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<WelcomePage></WelcomePage>}></Route>
        <Route path='/signUp/' element={<SignUp></SignUp>}></Route>
        <Route path='/register/' element={<Register></Register>}></Route>
        <Route path='/courts/' element={<Courts></Courts>}></Route>
        <Route path='/rank/' element={<Rank></Rank>}></Route>
        <Route path='/hotCourts/' element={<HotCourts></HotCourts>}></Route>
        <Route path='/Events/' element={<Chat></Chat>}>{}</Route>
        <Route path='/configuration/' element={<Configuration></Configuration>}></Route>
        <Route path='/restorePassword/' element={<RestorePassword></RestorePassword>}></Route>
        <Route path='/account/' element={<Account></Account>}></Route>
        <Route path='/settings/' element={<Settings></Settings>}></Route>
        <Route path='/createEvent/' element={<CreateEvent></CreateEvent>}></Route>
        <Route path='*' element={<h1>ERROR 404</h1>}></Route>

    </Routes>
    </BrowserRouter>
    );

}

export default realRoute;