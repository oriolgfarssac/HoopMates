import { Link } from "react-router-dom";

const configuration = () =>{

    return(
        <>
<main className='mainContainer11'>
      <header className='header'>
        <Link to={'/account/'} className='account'><img src="/icons/usuario.png" className='account' /></Link>
        <h1 className='t1'> Support </h1>
        <Link to={'/settings/'} className='account'><img src="/icons/ajustes.png" className='account'/></Link>
      </header>
      <ol className='list'>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              Content for Collapsible Group Item #1
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">
              Content for Collapsible Group Item #2
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              Content for Collapsible Group Item #3
            </div>
          </div>
        </div>
      </div>
      </ol>
    <footer className='footer'>
      <Link to="/courts/" className='navIcon'><img src="/icons/main.png" alt="" className='imgIcon'/></Link>
      <Link to="/rank/" className='navIcon'><img src="/icons/users.png" alt="" className='imgIcon'/></Link>
      <Link to="/hotCourts/" className='navIcon'><img src="/icons/pelota.png" alt="" className='imgIcon'/></Link>
      <Link to="/chat/" className='navIcon'><img src="/icons/team.png" alt="" className='imgIcon'/></Link>
      <Link to="/configuration/" className='navIcon'><img src="/icons/help1.png" alt="" className='imgIcon'/></Link>
    </footer>
    </main>
        </>
    );
}

export default configuration;