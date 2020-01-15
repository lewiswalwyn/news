import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../api'
import { Link } from '@reach/router'
import '../App.css'

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
         
        return api.fetchArticles({topic: this.props.topic || null})
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
                    {/* <nav> Sort By: <br></br>
                        <button>Date Created</button> <button>Most Commented</button> <button>Votes</button>
                    </nav> */}
                    <ul className="articlesList">
                        {this.state.articles.map((article) => {
                            return <Link to={`/articles/${article.article_id}`} className="articlesLink">
                                   <li key={article.article_id} className="articlesLink">
                                    <u>{article.title}</u>
                                    <br></br>
                                    <sub>Created: {article.created_at.substring(0, 10)}</sub>
                                    <br></br>
                                    <i>- {article.author}</i>
                                    <br></br>
                                    <br></br>
                                </li></Link>
                        })}
                    </ul>
                </div>
            )
        }
    }

