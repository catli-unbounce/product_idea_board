import React, { useState } from 'react';
import CommentResponse from '../CommentResponse';

const CommentsListItem = ({comment}) => {

    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replies, setReplies] = useState(comment.replies ? [...comment.replies] : [])
    const [commentReply, setCommentReply] = useState({
        content: '',
        replyingTo: '',
        user: {
            image: './assets/user-images/image-zena.jpg',
            name: 'Catherine Li',
            username: 'snoopy'
        }
    })
    let commentReplies = [];
    const handleSubmitReply = (e) => {
        e.preventDefault();
        console.log(replies)
        let repliesArray = replies.length > 0? [commentReply, ...replies] : [commentReply]
        setReplies(repliesArray);
        setShowReplyForm(false);
        updateCommentReply('')
    }

    const updateCommentReply = (reply) => {
        setCommentReply({
            ...commentReply,
            content: reply,
            replyingTo: comment.user.username
        })
    }

    
    if(replies) {
        commentReplies = replies.map((reply) => {
            return (
                <CommentResponse reply={reply}></CommentResponse>
            )
        })
    }
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
                        <textarea onChange={(e) => updateCommentReply(e.target.value)} value={commentReply.content} className="text-input"></textarea>
                        <button onClick={(e) => handleSubmitReply(e)} className="respond-to-comment__submit">Reply</button>
                    </form>
                }
                {commentReplies.length > 0 &&
                    commentReplies
                }
            </div>
        </div>
    )
}

export default CommentsListItem;