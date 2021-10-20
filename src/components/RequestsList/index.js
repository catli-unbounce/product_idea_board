import React, { useState } from 'react';
import RequestsListItem from '../RequestsListItem'
const RequestsList = ({productRequests}) => {
    
    const productRequestsList = productRequests.map((item, index) => {
        return <RequestsListItem key={index} productRequest={item}></RequestsListItem>
    })
    return (
        <ul className="requestsList">
            {productRequestsList}
        </ul>
    )
}

export default RequestsList;