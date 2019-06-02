import React, { Component } from "react";
import './header.css'
import heroImage from '../assets/hero.jpg'
import headerData from '../data/headerData'
import Navigation from './Navigation'
import ButtonMain from './ButtonMain'
import ButtonGhost from './ButtonGhost'

class Header extends Component {
  render() {
    let background = {
            backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url( ${heroImage})`
    }

   
      
    return (
      <header style={background} className="header__main">
         
         
            <Navigation />
       

        <div className="row">
          <div className="hero-text-box">
            <h1>
              {headerData.headerTitle1} <br/> {headerData.headerTitle2}
            </h1>
            <ButtonMain text="Portfolio" />
            <ButtonGhost text="Contact" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
