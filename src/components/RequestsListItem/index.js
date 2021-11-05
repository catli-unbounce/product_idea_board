import React, { useState } from 'react';
import commentsIcon from '../../assets/shared/icon-comments.svg';
import upIcon from '../../assets/shared/icon-arrow-up.svg';
import {Link} from "react-router-dom";
const RequestsListItem = ({productRequest, upvote}) => {
    const [active, setActive] = useState(false);

    const updateActive = () => {
        const isActive = !active;
        setActive(isActive);
        if(isActive) {
            upvote(productRequest.id, 1)
        } else {
            upvote(productRequest.id, -1)
        }
    }

    let numberOfComments = productRequest.comments? productRequest.comments.length : 0;
    productRequest.comments.forEach(comment => {
        if(comment.replies) {
            numberOfComments = numberOfComments + comment.replies.length;
        }
    });
    return (
        <li className="request">
            <div className={active ? "request__votes request__votes--active" : "request__votes"} onClick={() => updateActive()}>
            <svg className="upvote-icon" width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                <p>{productRequest.upvotes}</p>
            </div>
            <div className="request__info">
                <h3 className="request__title"><Link to={`/requests/${productRequest.id}`}>{productRequest.title}</Link></h3>
                <p className="request__description">{productRequest.description}</p>
                <p className="request__category">{productRequest.category}</p>
            </div>
            <div className={productRequest.comments ? "request__comments" : "request__comments inactive"}>
                
                <img src={commentsIcon} alt="comments icon"></img><Link to={`/requests/${productRequest.id}`}>
                <p className="comments-count">{numberOfComments}</p> </Link>
            </div>
        </li>
    )
}

export default RequestsListItem;