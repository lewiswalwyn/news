import React, { Component } from 'react'
import './BallotBox.css'

export default class CommentBallotBox extends Component {

    state = {
        voted: false
    }

    render() {
        return (
            <div className="container">
                <h4 className="votecount">comment votes : {this.props.votes} &nbsp;</h4>
                
                <button onClick={
                    () => {this.props.func(this.props.commentID, 1); this.setState({voted: true})}}

                    className="up" disabled={this.state.voted}>
                        △
                        </button>

                <button onClick={
                    () => {this.props.func(this.props.commentID, -1); this.setState({voted: true})}} 
                    className="down" disabled={this.state.voted}>
                        ▽
                        </button>

                        {this.state.voted ? <p>you have voted</p>: null}
            </div>
        )
    }
}
