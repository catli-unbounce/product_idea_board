import React, { useState } from 'react';
import commentsIcon from '../../assets/shared/icon-comments.svg';
const RoadmapListItem = ({title, category, upvotes, status, id, description, comments}) => {
    return (
        <div className="roadmap_item orange">
            <h4 className="roadmap_item__title">{title}</h4>
            <p className="roadmap_item__desc">{description}</p>
            <p className="roadmap_item__category">{category}</p>
            <div>
                <p className="roadmap_item__votes">{upvotes}</p>
                <div className={comments? "roadmap_item__comments" : "roadmap_item__comments inactive"}>
                    <img src={commentsIcon} alt="comments icon"></img>
                    <p className="comments-count">{comments ? comments.length : 0}</p>
                </div>
                
            </div>
        </div>
    )
}

export default RoadmapListItem;