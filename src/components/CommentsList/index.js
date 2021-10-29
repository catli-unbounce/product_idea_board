import React, { useState } from 'react';
import RequestsListItem from '../RequestsListItem';
import CommentsListItem from '../CommentsListItem'
import {
    useParams
  } from "react-router-dom";
const CommentsList = ({comments}) => {
    
    const commentsList = comments.map((comment) => {
        return (
            <CommentsListItem key={comment.id} comment={comment}></CommentsListItem>
        )
    })
    return (
        <div className="comments_list">
            {commentsList}
        </div>
    )
}

export default CommentsList;