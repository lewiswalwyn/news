import React, { Component } from 'react'
import './BallotBox.css'
// import * as api from '../api'

// export default class ArticleBallotBox extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <h4 className="votecount">article votes : {this.props.votes} &nbsp;</h4>
//                 <button onClick={() => api.updateArticleVotes(this.props.articleID, 1)} className="up">△</button>
//                 <button onClick={() => api.updateArticleVotes(this.props.articleID, -1)}className="down">▽</button>
//             </div>
//         )
//     }
// }

export default class ArticleBallotBox extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="votecount">article votes : {this.props.votes} &nbsp;</h4>
                <button onClick={
                    () => this.props.func(this.props.articleID, 1)}

                    className="up">
                        △
                        </button>

                <button onClick={
                    () => this.props.func(this.props.articleID, -1)} 
                    className="down">
                        ▽
                        </button>
            </div>
        )
    }
}
