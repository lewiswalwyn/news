import React, { Component } from 'react'
import Header from './Header'
import TopBarLoggedInAs from './TopBarLoggedInAs'
import Nav from './Nav'

import './TopBar.css'

class TopBar extends Component {
    render() {
        return (
            <div className="Bar">
                <Header className="MyHeader"/>
                <TopBarLoggedInAs className="TopBarLoggedInAs" user={this.props.user}/>
                <Nav className="MyNav"/>
            </div>
        )
    }
}

export default TopBar;