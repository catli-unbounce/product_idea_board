import React, { useState } from 'react';
import RequestsListItem from '../RequestsListItem';
import {
    useParams
  } from "react-router-dom";
const CommentsList = ({comments}) => {

    const commentsList = comments.map((item) => {
        return (
            <div>{item.content}</div>
        )
    })
    return (
        <div className="comments_list">
            {commentsList}
        </div>
    )
}

export default CommentsList;