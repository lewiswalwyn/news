import React from 'react'
import Header from './Header'
import TopBarLoggedInAs from './TopBarLoggedInAs'
import Nav from './Nav'
import './TopBar.css'

export default function TopBar(props) {
    return (
        <div className="Bar">
                <Header className="MyHeader"/>
                <TopBarLoggedInAs className="TopBarLoggedInAs" user={props.user}/>
                <Nav className="MyNav"/>
            </div>
    )
}
