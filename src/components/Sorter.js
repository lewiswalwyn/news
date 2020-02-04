import React from 'react'
import '../App.css'

export default function Sorter(props) {
    return (
        <div className="dropdown">
            <button className="dropbtn">sort ▽</button>
            <div className="dropdown-content">
                <button onClick={props.createdAtSortFunc}>Date Created</button> 
                <button onClick={props.commentCountSortFunc}>Most Commented</button> 
                <button onClick={props.votesSortFunc}>Votes</button>
            </div>
        </div>
    )
}
