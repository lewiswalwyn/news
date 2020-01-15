import React, { Component } from 'react'
import axios from 'axios';
import Loading from '../components/Loading'
import { Link } from '@reach/router'

export default class Topics extends Component {

    state = {
        topics: [],
        isLoading: true
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
            console.log(topics)
            this.setState({ topics })
            this.setState({isLoading: false})
        })
    }

    render() {
        if(this.state.isLoading) {
            return <Loading />
        }

        else return (
            <div>
                <h2>Topics</h2>
                <ul>
                    {this.state.topics.map((topic => {
                        return <li key={topic.slug}>
                        <Link to={`/topics/${topic.slug}`}>
                            {topic.slug}</Link>
                            <br></br>
                            <br></br>
                        
                        </li>
                    }))}
                </ul>
            </div>
        )
    }
}
