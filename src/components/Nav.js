import React from 'react'
import { Link } from '@reach/router'

export default function Nav() {
    return (
        <div>
            <button><Link to={`/articles`}> articles </Link></button>
            <button><Link to={`/topics`}>topics</Link></button>
        </div>
    )
}
