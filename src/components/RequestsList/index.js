import React from 'react';
import RequestsListItem from '../RequestsListItem';
import emptyImg from '../../assets/suggestions/illustration-empty.svg';
import {Link} from "react-router-dom";
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
            <h3>There is no feedback yet.</h3>
            <p>Got a suggestion? Found a bug that needs to be squashed?</p>  
            <p>  We love hearing about new ideas to improve our app.</p>
            <Link className="banner__add-feedback-link" to="/new"><button className="banner__add-btn">+ Add Feedback</button></Link>
            
        </div>
    )
}

export default RequestsList;