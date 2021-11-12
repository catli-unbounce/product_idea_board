import React, { useState } from 'react';

const CommentResponse = ({reply}) => {

    const [showReplyForm, setShowReplyForm] = useState(false);

    const [commentReply, setCommentReply] = useState({
        content: '',
        replyingTo: '',
        user: {
            image: './assets/user-images/image-zena.jpg',
            name: 'Catherine Li',
            username: 'snoopy'
        }
    })

    const handleSubmitReply = (e) => {
        e.preventDefault();
    }

    const updateCommentReply = (reply) => {
        setCommentReply({
            ...commentReply,
            content: reply,
            replyingTo: reply.user.username
        })
    }
    return (
        <div key={reply.id} className="comments_list__item">
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
                {showReplyForm &&
                    <form className="respond-to-comment">
                        <textarea onChange={(e) => updateCommentReply(e.target.value)} value={commentReply.content} className="text-input"></textarea>
                        <button onClick={(e) => handleSubmitReply(e)} className="respond-to-comment__submit">Reply</button>
                    </form>
                }
            </div>
        </div>
    )
}


export default CommentResponse;