import React from 'react'

export default function CommentBox(props) {
    return (
        <div>
            <h3>Post Comment:</h3>
                    <form onSubmit={props.handleSubmit}>
                    <input type="text" onChange={props.handleChange} value={props.newComment} placeholder="comment here" className="CommentInput"></input>
                    <br></br>
                    {props.noComment ? <p text-align="left"><i>you must fill in the box first</i></p>: null}
                    <button type="submit" 
                    className="SubmitCommentButton" 
                    onClick={!props.newComment.length ? props.ifNoComment: null}>
                    submit</button>
                    </form>
        </div>
        
    )
}
