import React, { Component } from "react";
import Loading from "./Loading";
import BallotBox from "./BallotBox";
import * as api from "../api";
import "../App.css";
import ErrorDisplayer from "./ErrorDisplayer";
import Comments from "./Comments";

export default class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    newComment: "",
    err: "",
    noComment: false
  };

  componentDidMount() {
    api
      .fetchContent(this.props.id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
        console.dir(err);
      });
  }

  articleVoteChange = (articleid, direction) => {
    this.setState(prevState => {
      return {
        article: {
          ...prevState.article,
          votes: prevState.article.votes + direction
        },
        articleVoted: true
      };
    });
    api.updateArticleVotes(articleid, direction).catch(() => {
      this.setState(prevState => {
        return {
          article: {
            ...prevState.article,
            votes: prevState.article.votes - direction
          },
          articleVoted: false
        };
      });
    });
  };

  render() {
    const { isLoading, err, article } = this.state;

    if (isLoading === true) {
      return <Loading />;
    } else if (this.state.err.response) {
      return <ErrorDisplayer err={err} />;
    } else
      return (
        <div style={{ "padding-left": "1rem" }}>
          <h2>{article.title}</h2>
          <p className="ArticleText">{article.body}</p>

          <br></br>

          <BallotBox
            currID={article.article_id}
            votes={article.votes}
            func={this.articleVoteChange}
          />

          <br></br>

          <Comments
            className="comments"
            id={this.props.id}
            user={this.props.user}
          />
        </div>
      );
  }
}
