import React, { useState } from 'react';
import classNames from 'classnames/bind';
import commentsIcon from '../../assets/shared/icon-comments.svg';
const RoadmapListItem = ({title, category, upvotes, status, id, description, comments, upvote}) => {
    const [active, setActive] = useState(false);

    const updateActive = () => {
        const isActive = !active;
        setActive(isActive);
        if(isActive) {
            upvote(id, 1)
        } else {
            upvote(id, -1)
        }
    }

    var cardClass = classNames({
        roadmap_item: true,
        'orange': status === 'planned',
        'purple':  status === 'in-progress',
        'blue': status === 'live'
    });
    return (
        <div className={cardClass}>
            <h4 className="roadmap_item__title">{title}</h4>
            <p className="roadmap_item__desc">{description}</p>
            <p className="roadmap_item__category">{category}</p>
            <div>
                <div onClick={() => updateActive()} className={active? "roadmap_item__votes roadmap_item__votes-active" : "roadmap_item__votes"}>
                    <svg className="upvote-icon" width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    {upvotes}
                </div>
                <div className={comments? "roadmap_item__comments" : "roadmap_item__comments inactive"}>
                    <img src={commentsIcon} alt="comments icon"></img>
                    <p className="comments-count">{comments ? comments.length : 0}</p>
                </div>
                
            </div>
        </div>
    )
}

export default RoadmapListItem;