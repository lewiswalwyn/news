import React, { Component } from "react";
import * as api from "../api";
import Loading from "../components/Loading";
import { Link } from "@reach/router";
import "../App.css";
import ErrorDisplayer from "./ErrorDisplayer";

export default class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: ""
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    return api
      .fetchTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
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
          <h2 className="topicsHeader"> Topics</h2>
          <ul className="topicsList">
            {this.state.topics.map(topic => {
              return (
                <Link
                  to={`/topics/${topic.slug}`}
                  key={topic.slug}
                  className="topicsListItem"
                >
                  <li className="topicsListItem">
                    <br></br>
                    {topic.slug}
                    <br></br>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      );
  }
}
