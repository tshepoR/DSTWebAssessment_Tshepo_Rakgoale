import React from 'react'
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand">DSTV Now</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
         <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink to ="/movies">Movies</NavLink>
        </ul>
      </div>
    </nav>
    </React.Fragment>
    )
}
