import React, { useState } from 'react';
import RequestsListItem from '../RequestsListItem';
import CommentsList from '../CommentsList';
import {Link, useParams, useHistory} from "react-router-dom";
import backIcon from '../../assets/shared/icon-arrow-left.svg';
const RequestDetails = ({allRequests, upvote, addComment}) => {
    
    const params  = useParams();
    const requestId = parseInt(params.request_id);
    const request = allRequests.filter((item) => item.id === requestId)[0];
    const history = useHistory();
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(request, newComment);
        setNewComment('')
    }

    const handleCommentUpdate = (comment) => {
        if(newComment.length >= 250) {
            return;
        } else {
            setNewComment(comment)
        }
    }
    return (
        <div className="request_details">
            {request &&
                <>
                <div className="request_details__nav">
                    <div className="go-back">
                        <img alt="back" src={backIcon}></img><a href="#" onClick={() => history.goBack()}>Go Back</a>
                    </div>
                    <Link to={`/requests/${requestId}/edit`}><button className="request_details__edit-btn">Edit Feedback</button></Link>
                </div>
                <RequestsListItem
                    productRequest={request}
                    upvote={upvote}
                ></RequestsListItem>
                {request.comments &&
                    <CommentsList comments={request.comments}></CommentsList>
                }
                
                </>
            }
            
            <form className="new_comment_form">
                <h3 className="new_comment_form__title">Add New Comment</h3>
                <textarea onChange={(e) => handleCommentUpdate(e.target.value)} className="text-input" placeholder="Type your comment here" value={newComment}></textarea>
                <div>
                    <span className={250 - newComment.length < 0 ? "new_comment_form__chars error" : "new_comment_form__chars"}>{250 - newComment.length < 0 ? 0 : 250 - newComment.length} characters left</span>
                    <button onClick={(e) => handleSubmit(e)}>Post Comment</button>
                </div>
            </form>
        </div>
    )
}

export default RequestDetails;