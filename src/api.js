import axios from 'axios'



export function fetchArticles (params) {
    // value of topic is going to get passed in 
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
    .then(({data}) => {
        console.log(data)
    })
}

export function updateCommentVotes (commentID, direction) {
    console.log(commentID)
    return axios.patch(`https://lewis-nc-news.herokuapp.com/api/comments/${commentID}`,
    { inc_votes: direction }
    )
    .then(({data}) => {
        console.log(data)
    })
}

export function deleteComment (commentID) {
    console.log(commentID)
    return axios.delete(`https://lewis-nc-news.herokuapp.com/api/comments/${commentID}`)
}

export function postComment (username, body, articleID) {
    console.log(username, body, articleID)
    return axios.post(`https://lewis-nc-news.herokuapp.com/api/articles/${articleID}/comments`,
    {username: username, body: body})
    .then(({response}) => {console.log(response)} )
}