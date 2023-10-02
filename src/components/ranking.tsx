import "./styles/ranking.css"

interface userProps {
    username: string,
    img: string,
    score: number,
  }

const ranking: React.FC<userProps> = ({ username, img, score,}) => {
    const getStoredU = localStorage.getItem('usuaris');
    let storedUsersReal: any[] = [];
  
    if (getStoredU) {
      try {
        storedUsersReal = JSON.parse(getStoredU);
      } catch (error) {
        console.error('Error parsing stored users:', error);
      }
    }

    return(
    <>
    <div className="rankInfo">
        <img src={img} alt="" className="userImg"/> <h1 className="userName">{username}</h1> <h1 className="userScore">Hr{score}</h1>
    </div>
    </>
    );

}

export default ranking;