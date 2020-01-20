import React, { Component } from 'react'
import './LoginPage.css'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1 >you are logged in as {this.props.user}</h1>
            </div>
        )
    }
}
