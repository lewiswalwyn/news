import React, { Component } from 'react'
import axios from 'axios';
import Loading from '../components/Loading'

export default class ArticlesByTopic extends Component {

    state = {
        articles: [],
        isLoading: true
    }

    componentDidMount() {
        this.fetchContent()
        
    }

    fetchContent() {
        
        return axios.get(`https://lewis-nc-news.herokuapp.com/api/articles?topic=${this.props.topic}`)
        .then(({data}) => {
            return data.articles
        })
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
                    
                    <h2>Articles About <i>{this.props.topic.toUpperCase()}</i> </h2>
                    <nav> Sort By:
                        <button >Date Created</button> <button>Most Commented</button> <button>Votes</button>
                    </nav>
                    <ul>
                        {this.state.articles.map((article) => {
                            return <li key={article.article_id}>
                                <a href={`/articles/${article.article_id}`}>
                                    {article.title}</a>
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
