import axios from 'axios'

export function fetchArticles (params) {
    return axios.get('https://lewis-nc-news.herokuapp.com/api/articles',
    { params } //<---
    )
    .then(({data}) => {
        return data.articles
    
    })
}

export function updateArticleVotes (articleid, direction) {
    return axios.patch(`https://lewis-nc-news.herokuapp.com/api/articles/${articleid}`,
    { inc_votes: direction }
    )
}

export function updateCommentVotes (commentid, direction) {
    return axios.patch(`https://lewis-nc-news.herokuapp.com/api/comments/${commentid}`,
    { inc_votes: direction }
    )
}

export function deleteComment (commentid) {
    return axios.delete(`https://lewis-nc-news.herokuapp.com/api/comments/${commentid}`)
}

export function postComment (username, body, articleid) {
    return axios.post(`https://lewis-nc-news.herokuapp.com/api/articles/${articleid}/comments`,
    {username: username, body: body})
    .then(({data}) => {
        return data.comment
    })
}

export function fetchContent (id) {
    return axios.get(`https://lewis-nc-news.herokuapp.com/api/articles/${id}`)
    .then(({data}) => {
        return data.article
    })
}

export function fetchComments (id) {
    return axios.get(`https://lewis-nc-news.herokuapp.com/api/articles/${id}/comments`)
    .then(({data}) => {
        return data.comments
    })
}

export function fetchTopics () {
    return axios.get('https://lewis-nc-news.herokuapp.com/api/topics')
        .then(({data}) => {
            return data.topics
        })
}