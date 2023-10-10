import '../../components/styles/game.css'
import { useNavigate } from 'react-router-dom';

interface neWEvent {
    gameName: string;
    gameDescription: string;
    gameCourt: string;
    gameDate: string;
}

const createEvent: React.FC = () => {
    const history = useNavigate();

    const create = () => {
        const name = document.getElementById('name') as HTMLInputElement | null;
        const description = document.getElementById('description') as HTMLInputElement | null; // Use 'description' as the correct ID
        const court = document.getElementById('court') as HTMLSelectElement | null;
        const date = document.getElementById('date') as HTMLInputElement | null; // Use 'date' as the correct ID

        if (name && description && court && date) { // Check if elements are not null
            if (name.value !== '' && description.value !== '' && court.value !== '' && date.value !== '') {
                const newNewEvent: neWEvent = {
                    gameName: String(name.value),
                    gameDescription: String(description.value),
                    gameCourt: String(court.value),
                    gameDate: String(date.value),
                };

                let storedEvents = localStorage.getItem('events');
                const storedUsersReal: neWEvent[] = storedEvents ? JSON.parse(storedEvents) : [];
                storedUsersReal.push(newNewEvent);
                localStorage.setItem('events', JSON.stringify(storedUsersReal));
                history('/Events/');
            }
        }
    }

    return(
        <>
        <div className="createContainer">
            <img src="/icons/team.png" className='eventPic' />
            <br />
            <h1 className='titleCreate'>Event Creation</h1>
            <br />
            <div className="inputContainer">
            <img src="/icons/team.png" className="iconInput" />
            <input type="text" className="accountInput"  placeholder={"Event Title"} id="name" />
            </div>
            <br />
            <div className="inputContainer">
            <img src="/icons/description.png" className="iconInput" />
            <input type="text" className="accountInput"  placeholder={"Event Description"} id="description" />
            </div>
            <br />
            <div className="inputContainer">
            <img src="/icons/calendari.png" className="iconInput" />
            <input type="date" className="accountInput"  placeholder={"Event Description"} id="date" />
            </div>
            <br />
            <div className="inputContainer">
        <img src="/icons/court.png" className="iconInput" />
        <select name="Position" className="accountInput" id="court">
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
        <button className='create' onClick={create}> Create Event </button>
        </div>
        </>
    );
}

export default createEvent