import React from 'react'
import { Link } from '@reach/router'
import './Nav.css'

export default function Nav() {
    return (
        <div>
            <Link to={`/articles`} className="buttonLink">
                <button> articles </button>
                </Link>

            <Link to={`/topics`} className="buttonLink">
                <button>topics</button>
                </Link>
        </div>
    )
}
