import React, { useState } from 'react';
import RequestsListItem from '../RequestsListItem';
import {
    useParams
  } from "react-router-dom";
const CommentsList = ({comments}) => {
    console.log(process.env.PUBLIC_URL)
    const commentsList = comments.map((comment) => {
        return (
            <div key={comment.id} className="comments_list__item">
                <img className="comments_list__user-photo" src={'../../' + comment.user.image}></img>
                <div className="comments_list__container">
                    <div className="comments_list__user-details">
                        <div>
                            <p className="comments_list__user-fullname">{comment.user.name}</p>
                            <p>@{comment.user.username}</p>
                        </div>
                            
                        <p>Reply</p>
                       
                    </div>
                    
                    <div className="comments_list__content">{comment.content}</div>
                </div>
                
            </div>
        )
    })
    return (
        <div className="comments_list">
            {commentsList}
        </div>
    )
}

export default CommentsList;