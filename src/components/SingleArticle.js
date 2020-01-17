import React, { Component } from 'react'
import axios from 'axios'
import Loading from './Loading'
import ArticleBallotBox from './ArticleBallotBox'
import CommentBallotBox from './CommentBallotBox'
import * as api from '../api'
import '../App.css'
import ErrorDisplayer from './ErrorDisplayer'

export default class SingleArticle extends Component {

    state = {
        article: {},
        comments: [],
        isLoading: true,
        newComment: '',
        err: ''
    }

    componentDidMount() {
        this.fetchContent()
        this.fetchComments()
    }

    fetchContent() {
        return axios.get(`https://lewis-nc-news.herokuapp.com/api/articles/${this.props.id}`)
        .then(({data}) => {
            return data.article
        })
        .then((article) => {
            this.setState({ article })
            this.setState({ isLoading: false})
        })
        .catch((err) => {
            this.setState({ err, isLoading: false })
            console.dir(err)
        })
    }

    fetchComments() {
        return axios.get(`https://lewis-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`)
        .then(({data}) => {
            return data.comments
        })
        .then((comments) => {
            this.setState({ comments })
        })
        .catch((err) => {
                this.setState({err, isLoading: false})
        })
    }

    handleChange = (event) => {
       this.setState({newComment: event.target.value})
       console.log(event.target.value)
       console.log(this.state.newComment)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        api.postComment(this.props.user, this.state.newComment, this.state.article.article_id)
    }



    render() {
        if (this.state.isLoading === true) {
            return <Loading />
        }

        else if (this.state.err.response) {
            return <ErrorDisplayer err={this.state.err}/>
        }

        else return (
                <div>
                    <h2>{this.state.article.title}</h2>
                    <p class="ArticleText">{this.state.article.body}</p>
                    <br></br>
                    <ArticleBallotBox articleID={this.state.article.article_id} votes={this.state.article.votes}/>
                    <br></br>

                    <h3>Post Comment:</h3>
                    <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.newComment} placeholder="comment here" className="CommentInput"></input>
                    <br></br>
                    <button type="submit" className="SubmitCommentButton" disabled={!this.state.newComment.length}>submit</button>
                    </form>

                    <h3>Comments:</h3>
                    <ul>
                        {this.state.comments.map((comment) => {
                            return <li key={comment.comment_id}>
                                    <b>{comment.author}</b>
                                    <br></br>
                                    - <i>{comment.body}</i>
                                    <br></br>
                                    <CommentBallotBox commentID={comment.comment_id} votes={comment.votes} />
                                    <br></br>
                                    {comment.author === this.props.user && <button onClick={() => api.deleteComment(comment.comment_id)}>△ delete your comment △</button>}  
                                    <br></br>
                                    <br></br>
                                </li>
                            })
                        }
                    </ul>
                </div>
            )
        }
    }

