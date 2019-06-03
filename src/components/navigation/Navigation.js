import React, { Component } from "react";

import MyPic from "../../assets/me.jpg";
import './navigation.css'
import NavLink from './NavLink'


class Navigation extends Component {
  render() {

    


    return (
      <div className="row">
       
          <nav>

            
            <img className="nav__picture-me" src={MyPic} alt="my picture" />
            

            <ul className="nav__list">
              <NavLink link="Home"/>
              <NavLink link="Skills"/>
              <NavLink link="Portfolio"/>
              <NavLink link="Contact"/>
            </ul>

            

          </nav>


        </div>
      
    )
  }
}

export default Navigation;
