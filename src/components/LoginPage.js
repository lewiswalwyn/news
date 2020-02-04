import React from 'react'
import './LoginPage.css'

export default function LoginPage(props) {
    
        return (
            <div>
                <h1 >you are logged in as {props.user}</h1>

                <div className="dropdown">
                    <button className="dropbtn">user ▽</button>
                    <div className="dropdown-content">
                        {props.usersList.map(user => {
                            return <button key={user} onClick={() => {props.switchUser(user)}}>
                                {user}
                                </button>
                        })}
                    </div>
                </div>

            </div>
        )
    
}
