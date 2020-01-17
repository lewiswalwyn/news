import React, { Component } from 'react'
import './LoginPage.css'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
    <h1 >you are logged in as {this.props.user}</h1>

                <nav role="navigation">
                    {/* <ul>
                        <li><a href="#">Two</a>
                        <ul class="dropdown">
                            <li><a href="#">Sub-1</a></li>
                            <li><a href="#">Sub-2</a></li>
                            <li><a href="#">Sub-3</a></li>
                        </ul>
                        </li>
                    </ul> */}
                </nav>
            </div>
        )
    }
}
