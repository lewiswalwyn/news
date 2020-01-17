import React, { Component } from 'react'
import './BallotBox.css'

export default class CommentBallotBox extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="votecount">comment votes : {this.props.votes} &nbsp;</h4>
                <button onClick={
                    () => this.props.func(this.props.commentID, 1)}

                    className="up">
                        △
                        </button>

                <button onClick={
                    () => this.props.func(this.props.commentID, -1)} 
                    className="down">
                        ▽
                        </button>
            </div>
        )
    }
}
