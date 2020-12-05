import React from 'react'
import "./NavBar.css"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-wallet" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path fillRule="evenodd" d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
        </svg>

        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-link active" href="/">Dashboard <span className="sr-only">(current)</span></a>
            <a className="nav-link active" href="/debts">Cadastrar Dívidas <span className="sr-only">(current)</span></a>
            
        </div>
        </div>
    </nav>
    );
};

export default NavBar