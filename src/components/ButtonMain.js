import React, { Component } from 'react'
import '../components/button-main.css'

class ButtonMain extends Component {
    render() {
        return(
            <a class="button-main" href="#">{this.props.text}</a>
        )
    }
}

export default ButtonMain