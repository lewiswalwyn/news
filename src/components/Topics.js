import React, { Component } from 'react'
import axios from 'axios';
import Loading from '../components/Loading'
import { Link } from '@reach/router'
import '../App.css'
import ErrorDisplayer from './ErrorDisplayer'

export default class Topics extends Component {

    state = {
        topics: [],
        isLoading: true,
        err: ''
    }

    componentDidMount() {
        this.fetchContent()
        
    }

    fetchContent() {
        
        return axios.get('https://lewis-nc-news.herokuapp.com/api/topics')
        .then(({data}) => {
            return data.topics
        })
        .then((topics) => {
            this.setState({ topics, isLoading: false })
        })
        .catch((err) => {
            this.setState({err, isLoading: false})
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Loading />
        }

        if (this.state.err.response) {
            return <ErrorDisplayer err={this.state.err}/>
        }

        else return (
            <div>
                <h2>Topics</h2>
                <ul className="topicsList">
                    {this.state.topics.map((topic => {
                        return <Link to={`/topics/${topic.slug}`} key={topic.slug} className="topicsListItem">
                            <li className="topicsListItem">
                                <br></br>
                                {topic.slug}
                                <br></br>
                            </li>
                        </Link>
                    }))}
                </ul>
            </div>
        )
    }
}
