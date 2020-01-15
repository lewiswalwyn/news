import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'

import './TopBar.css'

class TopBar extends Component {
    render() {
        return (
            <div className="Bar">
                <Header className="MyHeader"/>
                <Nav className="MyNav"/>
            </div>
        )
    }
}

export default TopBar;