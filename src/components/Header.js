import React, { Component } from "react";
import './header.css'
import heroImage from '../assets/hero.jpg'
import headerData from '../data/headerData'



class Header extends Component {
  render() {
    let background = {
            backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url( ${heroImage})`,
    }
      
    return (
      <header style={background} className="header__main">
         
        <div className="row">
          <div className="header-wrapper">
            <div className="picture">
              <img
                className="picture__me"
                src="./resources/images/me.jpg"
                alt="my picture"
              />
            </div>
            <nav className="main-nav">
              <ul>
                <li>
                  <a className="main-nav__button" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="main-nav__button" href="./html/skills.html">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="main-nav__button" href="./html/portfolio.html">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="main-nav__button" href="./html/concact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            

            <img
              className="logo__pic"
              src="./resources/images/logo.svg"
              alt="Integrify Logo"
            />
          </div>
        </div>
        <div className="row">
          <div className="hero-text-box">
            <h1>
              {headerData.headerTitle1} <br/> {headerData.headerTitle2}
            </h1>
            <a className="button button--a" href="#">
              Portfolio
            </a>
            <a className="button button--b" href="#">
              Contact
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
