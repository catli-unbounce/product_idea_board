import React from 'react';

const CommentsListItem = ({reply}) => {
    return (
        <div key={comment.id} className="comments_list__item">
            <img className="comments_list__user-photo" src={'../../' + reply.user.image}></img>
            <div className="comments_list__container">
                <div className="comments_list__user-details">
                    <div>
                        <p className="comments_list__user-fullname">{reply.user.name}</p>
                        <p>@{reply.user.username}</p>
                    </div>
                    <p onClick={() => setShowReplyForm(!showReplyForm)} className="comments_list__reply"><a>Reply</a></p>
                </div>
                
                <div className="comments_list__content"><span className="replying-to">@{reply.replyingTo}</span> {reply.content}</div>
            </div>
        </div>
    )
}


export default CommentReponse;