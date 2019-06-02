import React, {Component} from 'react'

const NavLink = (props) => {
    return(
        <li className="nav__list-item"><a className="nav__link" href={"#"}>{props.link}</a></li>
    )
}

export default NavLink