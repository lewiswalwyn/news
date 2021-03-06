import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../api";
import { Link } from "@reach/router";
import ErrorDisplayer from "./ErrorDisplayer";
import Sorter from "./Sorter";
import "../App.css";

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: {}
  };

  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate(prevProps) {
    if (this.props.uri !== prevProps.uri) {
      this.fetchContent();
    }
  }

  fetchContent = sort_by => {
    return api
      .fetchArticles({ topic: this.props.topic || null, sort_by: sort_by })
      .then(articles => {
        this.setState({ articles, isLoading: false, err: {} });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    if (this.state.err.response) {
      return <ErrorDisplayer err={this.state.err} />;
    } else
      return (
        <div>
          <h2>Articles</h2>

          <Sorter
            createdAtSortFunc={() => {
              this.fetchContent("created_at");
            }}
            commentCountSortFunc={() => {
              this.fetchContent("comment_count");
            }}
            votesSortFunc={() => {
              this.fetchContent("votes");
            }}
          />

          <ul className="articlesList">
            {this.state.articles.map(
              ({
                article_id,
                title,
                created_at,
                author,
                comment_count,
                votes
              }) => {
                return (
                  <Link
                    to={`/articles/${article_id}`}
                    key={article_id}
                    className="articlesLink"
                  >
                    <li className="articlesLink">
                      <u>{title}</u>
                      <br></br>
                      <sub>Created: {created_at.substring(0, 10)}</sub>
                      <br></br>
                      <i>- {author}</i>
                      <br></br>
                      comment count : {comment_count}
                      <br></br>
                      votes: {votes}
                      <br></br>
                      <br></br>
                    </li>
                  </Link>
                );
              }
            )}
          </ul>
        </div>
      );
  }
}
