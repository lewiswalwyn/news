import React, { Component } from "react";
import * as api from "../api";
import Loading from "./Loading";
import BallotBox from "./BallotBox";
import CommentBox from "./CommentBox";

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    newComment: "",
    noComment: true
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api
      .fetchComments(this.props.id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  commentVoteChange = (commentid, direction) => {
    const commentIndex = this.state.comments.indexOf(
      this.state.comments.find(comment => comment.comment_id === commentid)
    );

    // this.setState(prevState => { return {
    //     article: {...prevState.article, votes: prevState.article.votes + direction}, articleVoted: true }})

    //^^^^ make it more like this

    // this.setState(prevState => { return {
    //     comments: [...prevState.comments, ]
    // }})

    if (direction === 1) {
      this.setState(({ comments }) => {
        return {
          [comments[commentIndex].votes]: comments[commentIndex].votes++
        };
      });
    } else if (direction === -1) {
      this.setState(({ comments }) => {
        return {
          [comments[commentIndex].votes]: comments[commentIndex].votes--
        };
      });
    }
    api.updateCommentVotes(commentid, direction);
  };

  handleDelete = commentid => {
    api.deleteComment(commentid);
    const nuComments = [...this.state.comments];
    this.setState({
      comments: nuComments.filter(({ comment_id }) => comment_id !== commentid)
    });
  };

  handleChange = event => {
    this.setState({ newComment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postComment(this.props.user, this.state.newComment, this.props.id)
      .then(response => {
        this.setState(prevState => {
          const { comments } = prevState;
          return {
            comments: [response, ...comments],
            newComment: ""
          };
        });
      })
      .catch(); ///// WHAT'S GOING ON HERE EY?
  };

  render() {
    const { newComment, noComment } = this.state;
    return (
      <div>
        <CommentBox
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newComment={newComment}
          noComment={noComment}
          user={this.props.user}
        />

        <h3>Comments:</h3>
        {!this.state.isLoading ? <Loading /> : null}
        <ul className="commentsList">
          {this.state.comments.map(({ comment_id, author, body, votes }) => {
            return (
              <li key={comment_id}>
                <b>{author}</b>
                <br></br>- <i>{body}</i>
                <br></br>
                <BallotBox
                  currID={comment_id}
                  votes={votes}
                  func={this.commentVoteChange}
                />
                {author === this.props.user && (
                  <button
                    onClick={() => this.handleDelete(comment_id)}
                    commentid={comment_id}
                  >
                    △ delete your comment △
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
