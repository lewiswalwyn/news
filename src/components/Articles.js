import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../api'
import { Link } from '@reach/router'
import '../App.css'
import ErrorDisplayer from './ErrorDisplayer'

export default class Articles extends Component {

    state = {
        articles: [],
        isLoading: true,
        err: {}
    }

    componentDidMount() {
        this.fetchContent()
    }

    componentDidUpdate(prevProps, prevState) {

        console.log(this.props.uri, "<-- this props uri")
        console.log(prevProps.uri, "<-- prevProps uri")

        if( this.props.uri !== prevProps.uri ) {
            this.fetchContent()
        }
    }

    fetchContent(sort_by) {
        console.log("stop trying to make fetch happen it's not going to happen")

        return api.fetchArticles({topic: this.props.topic || null, sort_by: sort_by})
        .then((articles) => {
            this.setState({ articles, isLoading: false, err: {} })
            console.log("state set")
        })
        .catch((err) => {
            this.setState({err, isLoading: false})
        })
    }

    sortByCommentCount() {
        this.setState({ articles : this.state.articles.sort(
            (b, a) => { 
                return a.comment_count - b.comment_count }
            )}
        )
    }

    sortByDate() {
        this.setState({ articles : this.state.articles.sort(
            (b, a) => { 
                return new Date(a.created_at) - new Date (b.created_at) }
            )}
        )
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />
        }

        if (this.state.err.response) {
            return <ErrorDisplayer err={this.state.err}/>
        }

        else return (
                <div>
                    <h2>Articles</h2>
                    <nav> Sort By: <br></br>
                        <button onClick={() => {this.fetchContent("created_at")}}>Date Created</button> 
                        <button onClick={() => {this.fetchContent("comment_count")}}>Most Commented</button> 
                        <button onClick={() => {this.fetchContent("votes")}}>Votes</button>
                    </nav>
                    <ul className="articlesList">
                        {this.state.articles.map((article) => {
                            return <Link to={`/articles/${article.article_id}`} key={article.article_id} className="articlesLink">
                                   <li className="articlesLink">
                                    <u>{article.title}</u>
                                    <br></br>
                                    <sub>Created: {article.created_at.substring(0, 10)}</sub>
                                    <br></br>
                                    <i>- {article.author}</i>
                                    <br></br>
                                    comment count : {article.comment_count}
                                    <br></br>
                                    votes: {article.votes}
                                    <br></br>
                                    <br></br>
                                </li></Link>
                        })}
                    </ul>
                </div>
            )
        }
    }