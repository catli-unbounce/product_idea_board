import React, { useState } from 'react';
import RequestsListItem from '../RequestsListItem';
import {
    useParams
  } from "react-router-dom";
const RequestDetails = ({allRequests}) => {
    
    let params  = useParams();
    let requestId = parseInt(params.request_id);
    let request = allRequests.filter((item) => item.id === requestId)[0];
    
    return (
        <div className="request_details">
            <RequestsListItem
                productRequest={request}
            ></RequestsListItem>
        </div>
    )
}

export default RequestDetails;