import React from "react";

export default function CommentBox({
  handleSubmit,
  user,
  handleChange,
  newComment
}) {
  return (
    <div>
      <h3>Post Comment:</h3>
      <form onSubmit={handleSubmit}>
        {!user ? (
          <p text-align="left">
            <i>you must be logged in to post a comment</i>
          </p>
        ) : (
          <div>
            <input
              type="text"
              onChange={handleChange}
              value={newComment}
              placeholder="comment here"
              className="CommentInput"
            ></input>
            <br></br>

            {!newComment.length ? (
              <div>
                <p text-align="left">
                  <i>join the conversation</i>
                </p>
                <button type="submit" className="SubmitCommentButton">
                  submit
                </button>
              </div>
            ) : (
              <button type="submit" className="SubmitCommentButton">
                submit
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
