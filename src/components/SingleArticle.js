import React, { Component } from 'react'
import axios from 'axios'
import Loading from './Loading'
import BallotBox from './BallotBox'
import * as api from '../api'
import '../App.css'
import ErrorDisplayer from './ErrorDisplayer'
import CommentBox from './CommentBox'

export default class SingleArticle extends Component {

    state = {
        article: {},
        comments: [],
        isLoading: true,
        newComment: '',
        err: '',
        noComment: false
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
    }

    handleSubmit = (event) => {
        event.preventDefault()
        api.postComment(this.props.user, this.state.newComment, this.state.article.article_id)
        .then(response => {
             this.setState(prevState => ({ comments: [response, ...prevState.comments], newComment: '' }))
        })
    }

    handleDelete = (commentid) => {

        api.deleteComment(commentid)

        const nuComments = [...this.state.comments]
        this.setState({comments: nuComments.filter(comment => comment.comment_id !== commentid)})
    }

    commentVoteChange = (commentID, direction) => {

        const commentIndex = this.state.comments.indexOf(this.state.comments.find(comment => comment.comment_id === commentID))

        if(direction === 1) {
            this.setState(prevState => { return { [prevState.comments[commentIndex].votes]: prevState.comments[commentIndex].votes++ }})
            } 
        else if(direction === -1) {
            this.setState(prevState => { return { [prevState.comments[commentIndex].votes]: prevState.comments[commentIndex].votes-- }})
            } 

        api.updateCommentVotes(commentID, direction)
    }

    articleVoteChange = (articleID, direction) => {

        // if(direction === 1) {
        //     this.setState(prevState => { return { [prevState.article.votes]: prevState.article.votes++, articleVoted: true }})
        //     } 
        // else if(direction === -1) {
        //     this.setState(prevState => { return { [prevState.article.votes]: prevState.article.votes--, articleVoted: true }})
        //     } 

        const nuVotes = this.state.article.votes + direction

        this.setState((prevState) => { return {...prevState, [prevState.article.votes]: nuVotes}})
  
        api.updateArticleVotes(articleID, direction)
        .catch(() => {
            // OI do something to undo the optimistic rendering if this function fails!!
        })

    }

    ifNoComment = () => {
        this.setState({noComment: true});
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
                    <BallotBox currID={this.state.article.article_id} votes={this.state.article.votes} func={this.articleVoteChange} />
                    <br></br>

                    <CommentBox 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} 
                    newComment={this.state.newComment} 
                    noComment={this.state.noComment} 
                    ifNoComment={this.ifNoComment}
                    />
{/* 
                    <h3>Post Comment:</h3>
                    <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.newComment} placeholder="comment here" className="CommentInput"></input>
                    <br></br>
                    {this.state.noComment ? <p text-align="left"><i>you must fill in the box first</i></p>: null}

                    <button type="submit" className="SubmitCommentButton" onClick={!this.state.newComment.length ? this.ifNoComment: null} 
                    >submit</button>
                    </form> */}


                    <h3>Comments:</h3>
                    <ul className="commentsList">
                        {this.state.comments.map((comment) => {
                            return <li key={comment.comment_id}>
                                    <b>{comment.author}</b>
                                    <br></br>
                                    - <i>{comment.body}</i>
                                    <br></br>
                                    <BallotBox currID={comment.comment_id} votes={comment.votes} func={this.commentVoteChange}/>
                                    <br></br>
                                    {comment.author === this.props.user && <button onClick={() => this.handleDelete(comment.comment_id)} commentID={comment.comment_id}>△ delete your comment △</button>}  
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

