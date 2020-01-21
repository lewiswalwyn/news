import React, { Component } from 'react'
import './LoginPage.css'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1 >you are logged in as {this.props.user}</h1>

                <div class="dropdown">
                    <button class="dropbtn">user ▽</button>
                    <div class="dropdown-content">
                        {this.props.usersList.map(user => {
                            return <button onClick={() => {this.props.switchUser(user)}}>
                                {user}
                                </button>
                        })}
                    </div>
                </div>

            </div>
        )
    }
}
