import React, { Component } from 'react'
import '../components/button-ghost.css'

class ButtonGhost extends Component {
    render() {
        return(
            <a class="button-ghost" href="#">{this.props.text}</a>
        )
    }
}

export default ButtonGhost