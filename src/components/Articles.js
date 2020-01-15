import React, { Component } from 'react';
import Loading from './Loading';
import {fetchArticles} from '../api'
import { Link } from '@reach/router'

export default class Articles extends Component {

    state = {
        articles: [],
        isLoading: true
    }

    componentDidMount() {
        this.fetchContent()
    }

    fetchContent() {
        // parametric endpoint from router props
         
        return fetchArticles({topic: this.props.topic || null})
        .then((articles) => {
            this.setState({ articles, isLoading: false })
        })
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />
        }

        else return (
                <div>
                    <h2>Articles</h2>
                    <nav> Sort By:
                        <button >Date Created</button> <button>Most Commented</button> <button>Votes</button>
                    </nav>
                    <ul>
                        {this.state.articles.map((article) => {
                            return <li key={article.article_id}>
                                <Link to={`/articles/${article.article_id}`}>
                                    {article.title}</Link>
                                    <br></br>
                                    <sup>Created: {article.created_at.substring(0, 10)}</sup>
                                    <br></br>
                                    <i>- {article.author}</i>
                                    <br></br>
                                    <br></br>
                                </li>
                        })}
                    </ul>
                </div>
            )
        }
    }

