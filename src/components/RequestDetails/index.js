import React from 'react';
import RequestsListItem from '../RequestsListItem';
import CommentsList from '../CommentsList';
import {useParams, useHistory} from "react-router-dom";
import backIcon from '../../assets/shared/icon-arrow-left.svg';
const RequestDetails = ({allRequests}) => {
    
    let params  = useParams();
    let requestId = parseInt(params.request_id);
    let request = allRequests.filter((item) => item.id === requestId)[0];
    const history = useHistory()
    return (
        <div className="request_details">
            {request &&
                <>
                <div className="request_details__nav">
                    <div className="go-back">
                        <img alt="back" src={backIcon}></img><a href="#" onClick={() => history.goBack()}>Go Back</a>
                    </div>
                    <button className="request_details__edit-btn">Edit Feedback</button>
                </div>
                <RequestsListItem
                    productRequest={request}
                ></RequestsListItem>
                {request.comments &&
                    <CommentsList comments={request.comments}></CommentsList>
                }
                
                </>
            }
            
            <form className="new_comment_form">
                <h3 className="new_comment_form__title">Add New Comment</h3>
                <textarea className="text-input" placeholder="Type your comment here"></textarea>
                <div>
                    <span className="new_comment_form__chars">250 characters left</span>
                    <button type="submit">Post Comment</button>
                </div>
            </form>
        </div>
    )
}

export default RequestDetails;