import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../api'
import { Link } from '@reach/router'
import '../App.css'
// import ArticleBallotBox from './ArticleBallotBox'
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

    fetchContent() {
        // parametric endpoint from router props
        return api.fetchArticles({topic: this.props.topic || null})
        .then((articles) => {
            this.setState({ articles, isLoading: false })
        })
        .catch((err) => {
            this.setState({err, isLoading: false})
    })
    }

    componentDidUpdate(prevProps, prevState) {

        if( this.props !== prevProps ) {
        return api.fetchArticles({topic: this.props.topic || null})
        .then((articles) => {
            this.setState({ articles, isLoading: false })
        })
        .catch((err) => {
            this.setState({err, isLoading: false})
        })
        }
    }

    sortByVotes() {
        this.setState({ articles : this.state.articles.sort(
            (b, a) => { 
                return a.votes - b.votes }
            )}
        )
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

    // voteChange = (articleID, direction) => {
    //     const articleIndex = this.state.articles.indexOf(this.state.articles.find(article => article.article_id === articleID))

    //     if(direction === 1) {
    //         this.setState(prevState => { return { [prevState.articles[articleIndex].votes]: prevState.articles[articleIndex].votes++ }})
    //         } 
    //     else if(direction === -1) {
    //         this.setState(prevState => { return { [prevState.articles[articleIndex].votes]: prevState.articles[articleIndex].votes-- }})
    //         } 

    //     api.updateCommentVotes(articleID, direction)
    // }

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
                        <button onClick={this.sortByDate.bind(this)}>Date Created</button> 
                        <button onClick={this.sortByCommentCount.bind(this)}>Most Commented</button> 
                        <button onClick={this.sortByVotes.bind(this)}>Votes</button>
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
                                    {/* <ArticleBallotBox articleID={article.article_id} votes={article.votes} func={this.voteChange}/> */}
                                    <br></br>
                                </li></Link>
                        })}
                    </ul>
                </div>
            )
        }
    }