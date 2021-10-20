import React, { useState } from 'react';
import commentsIcon from '../../assets/shared/icon-comments.svg';
import upIcon from '../../assets/shared/icon-arrow-up.svg';
// import suggestionIcon from '../../assets/suggestions/icon-suggestions.svg'
const RequestsListItem = ({productRequest}) => {
    
    return (
        <li className="request">
            <div className="request__votes">
                <img alt="upvote" src={upIcon} className="upvote-icon"></img>
                <p>{productRequest.upvotes}</p>
            </div>
            <div>
                <h3 className="request__title">{productRequest.title}</h3>
                <p className="request__description">{productRequest.description}</p>
            </div>
            <div className="request__comments">
                <img src={commentsIcon} alt="comments icon"></img>
                <p className="comments-count">{productRequest.comments ? productRequest.comments.length : 0}</p>
            </div>
        </li>
    )
}

export default RequestsListItem;