import React from 'react'
import './TopBarLoggedInAs.css'

export default function TopBarLoggedInAs(props) {
    return (
            <p>you are logged in as <i>{props.user}</i></p>
    )
}
