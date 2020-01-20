import axios from 'axios'



export function fetchArticles (params) {
    return axios.get('https://lewis-nc-news.herokuapp.com/api/articles',
    { params } //<---
    )
    .then(({data}) => {
        return data.articles
    
    })
}

export function updateArticleVotes (articleID, direction) {
    return axios.patch(`https://lewis-nc-news.herokuapp.com/api/articles/${articleID}`,
    { inc_votes: direction }
    )
}

export function updateCommentVotes (commentID, direction) {
    return axios.patch(`https://lewis-nc-news.herokuapp.com/api/comments/${commentID}`,
    { inc_votes: direction }
    )
}

export function deleteComment (commentID) {
    return axios.delete(`https://lewis-nc-news.herokuapp.com/api/comments/${commentID}`)
}

export function postComment (username, body, articleID) {
    return axios.post(`https://lewis-nc-news.herokuapp.com/api/articles/${articleID}/comments`,
    {username: username, body: body})
    .then(({data}) => {
        return data.comment
    })
}