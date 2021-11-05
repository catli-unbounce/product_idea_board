import React from 'react';
import RequestsListItem from '../RequestsListItem';
import emptyImg from '../../assets/suggestions/illustration-empty.svg';
const RequestsList = ({productRequests, upvote}) => {
    
    const productRequestsList = productRequests.map((item, index) => {
        return <RequestsListItem upvote={upvote} key={index} productRequest={item}></RequestsListItem>
    })
    return (
        productRequestsList.length > 0 ?
        <ul className="requestsList">
            {productRequestsList}
        </ul>
        : 
        <div className="requestsList--empty">
            <img src={emptyImg} alt="No product suggestions"></img>
        </div>
    )
}

export default RequestsList;