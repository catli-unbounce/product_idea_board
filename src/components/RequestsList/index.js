import React, { useState } from 'react';
import RequestsListItem from '../RequestsListItem'
const RequestsList = ({productRequests, upvote}) => {
    
    const productRequestsList = productRequests.map((item, index) => {
        return <RequestsListItem upvote={upvote} key={index} productRequest={item}></RequestsListItem>
    })
    return (
        <ul className="requestsList">
            {productRequestsList}
        </ul>
    )
}

export default RequestsList;