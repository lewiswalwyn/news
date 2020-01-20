import React, { Component } from 'react'
import './BallotBox.css'

export default class ArticleBallotBox extends Component {

    state = {
        voted: false
    }

    render() {
        return (
            <div className="container">
                <h4 className="votecount">votes : {this.props.votes} &nbsp;</h4>

                <button onClick={() => {this.props.func(this.props.currID, 1); this.setState({voted: true})}}
                    className="up" disabled={this.state.voted}
                    >△</button>

                <button onClick={() => {this.props.func(this.props.currID, -1); this.setState({voted: true})}}
                    className="down" disabled={this.state.voted}
                    >▽</button>
    
                {this.state.voted ? <p>the die is cast</p>: null}

            </div>
        )
    }
}
