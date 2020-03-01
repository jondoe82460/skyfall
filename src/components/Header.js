import React from 'react';
import { Link } from "react-scroll";
import logo from '../images/logo/logo.svg';

export default function Header() {

  return (
    <header id="header" className="header">
      <div className="container-fluid d-flex justify-content-between">
        <a href="https://skyfalltechnology.com/" className="logo-holder d-flex align-items-center">
          <div className="logo-img">
            <img src={logo} width="192" height="192" alt="Skyfall Technologies" />
          </div>
          <div className="logo-text">
            <span className="title">skyfall technologies</span>
            <span className="slogan d-block">Think Smart, Be Smart, Use Technology!</span>
          </div>
        </a>

        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}>Home</Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}>About</Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link"
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}>Services</Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link"
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}>Our Team</Link>
              </li>
              <li className="nav-item">
                <a href="tel:9849082460" className="btn btn-info">get in touch</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}