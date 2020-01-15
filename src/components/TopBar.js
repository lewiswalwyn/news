import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'

class TopBar extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
            </div>
        )
    }
}

export default TopBar;