import React, { useState } from 'react';
import RequestsListItem from '../RequestsListItem';
import CommentsList from '../CommentsList';
import {
    useParams
  } from "react-router-dom";
const RequestDetails = ({allRequests}) => {
    
    let params  = useParams();
    let requestId = parseInt(params.request_id);
    let request = allRequests.filter((item) => item.id === requestId)[0];
    // console.log(request)
    return (
        <div className="request_details">
            {request &&
                <>
                <RequestsListItem
                    productRequest={request}
                ></RequestsListItem>
                <CommentsList comments={request.comments}></CommentsList>
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