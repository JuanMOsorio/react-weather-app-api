import React from 'react';

import '../css/index.css'

const Navbar = () =>
  <nav className="navbar navbar-expand-lg navbar-dark py-3 bg-primary-dark shadow-sm mb-5 fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">WeatherApp</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mx-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light my-2 my-sm-0 ml-sm-2" type="submit">Search</button>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Country</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

export default Navbar;