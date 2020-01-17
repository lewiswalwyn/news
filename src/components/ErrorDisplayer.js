import React from 'react'

export default function ErrorDisplayer(props) {

    if(!props.err) {
        return (
            <div>
            <h3>Sorry buddy... I won't do it. Not for you. Not for anybody.</h3>
            <h1>404</h1>
            <h1>Bad Request</h1>
        </div> 
        )
    }
    else return (
        <div>
            <h3>Sorry buddy... I won't do it. Not for you. Not for anybody.</h3>
            <h1>{props.err.response.status}</h1>
            <h1>{props.err.response.data.msg}</h1>
        </div>
    )
}