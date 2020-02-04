import React, { Component } from "react";
import "./BallotBox.css";

export default class ArticleBallotBox extends Component {
  state = {
    voted: false
  };

  render() {
    return (
      <div className="container">
        <h4 className="votecount">votes : {this.props.votes} &nbsp;</h4>

        {this.state.voted ? (
          <p className="voted">you've voted</p>
        ) : (
          <div>
            <button
              onClick={() => {
                this.props.func(this.props.currID, 1);
                this.setState({ voted: true });
              }}
              className="up"
              disabled={this.state.voted}
            >
              △
            </button>

            <button
              onClick={() => {
                this.props.func(this.props.currID, -1);
                this.setState({ voted: true });
              }}
              className="down"
              disabled={this.state.voted}
            >
              ▽
            </button>
          </div>
        )}
      </div>
    );
  }
}
