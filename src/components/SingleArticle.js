import React, { Component } from 'react'
import axios from 'axios'
import Loading from './Loading'

export default class SingleArticle extends Component {

    state = {
        article: {},
        comments: [],
        isLoading: true
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
    }

    fetchComments() {
        return axios.get(`https://lewis-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`)
        .then(({data}) => {
            return data.comments
        })
        .then((comments) => {
            this.setState({ comments})
        })
    }
    render() {

        if (this.state.isLoading === true) {
            return <Loading />
        }

        else return (
                <div>
                    <h2>{this.state.article.title}</h2>
                    <p>{this.state.article.body}</p>
                    <br></br>
                    <h3>Comments:</h3>
                    <ul>
                        {this.state.comments.map((comment) => {
                            return <li key={comment.comment_id}>
                                    <b>{comment.author}</b> - Votes: {comment.votes}
                                    <br></br>
                                    - <i>{comment.body}</i>
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

