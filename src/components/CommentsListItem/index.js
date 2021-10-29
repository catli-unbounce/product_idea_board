import React, { useState } from 'react';

const CommentsListItem = ({comment}) => {

    const [showReplyForm, setShowReplyForm] = useState(false);

    return (
        <div key={comment.id} className="comments_list__item">
            <img className="comments_list__user-photo" src={'../../' + comment.user.image}></img>
            <div className="comments_list__container">
                <div className="comments_list__user-details">
                    <div>
                        <p className="comments_list__user-fullname">{comment.user.name}</p>
                        <p>@{comment.user.username}</p>
                    </div>
                    <p onClick={() => setShowReplyForm(!showReplyForm)} className="comments_list__reply"><a>Reply</a></p>
                </div>
                
                <div className="comments_list__content">{comment.content}</div>

                {showReplyForm &&
                    <form className="respond-to-comment">
                        <textarea className="text-input"></textarea>
                        <button className="respond-to-comment__submit" type="submit">Reply</button>
                    </form>
                }
                
            </div>
            
        </div>
    )
}

export default CommentsListItem;