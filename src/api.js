import axios from 'axios'

export function fetchArticles (params) {
    console.log(params)
    // value of topic is going to get passed in 
    return axios.get('https://lewis-nc-news.herokuapp.com/api/articles',
    { params } //<---
    )
    .then(({data}) => {
        return data.articles
    })
}