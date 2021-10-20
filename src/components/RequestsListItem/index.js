import React, { useState } from 'react';
import commentsIcon from '../../assets/shared/icon-comments.svg';
import upIcon from '../../assets/shared/icon-arrow-up.svg';
// import suggestionIcon from '../../assets/suggestions/icon-suggestions.svg'
const RequestsListItem = ({productRequest}) => {
    const [active, setActive] = useState(true);

    const updateActive = () => {
        const isActive = !active;
        setActive(isActive);
    }
    return (
        <li className="request">
            <div className={active ? "request__votes request__votes--active" : "request__votes"}>
            <svg className="upvote-icon" width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                <p>{productRequest.upvotes}</p>
            </div>
            <div>
                <h3 className="request__title">{productRequest.title}</h3>
                <p className="request__description">{productRequest.description}</p>
            </div>
            <div className="request__comments">
                <img src={commentsIcon} alt="comments icon"></img>

                {productRequest.comments ?
                    <p className="comments-count">{productRequest.comments.length}</p> :
                    <p className="comments-count inactive">0</p>
                }
            </div>
        </li>
    )
}

export default RequestsListItem;