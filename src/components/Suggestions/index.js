import React, { useState } from 'react';
import suggestionIcon from '../../assets/suggestions/icon-suggestions.svg'
const Suggestions = () => {
    return (
        <div className="suggestions">
            <div className="suggestions__info">
                <img src={suggestionIcon} alt="suggestions icon"></img> 6 Suggestions
                <span className="sort-by">Sort By:</span>
                <ul className="suggestions__sort-dropdown">
                    <li>Most Upvotes</li>
                    <li>Least Upvotes</li>
                    <li>Most Comments</li>
                    <li>Least Comments</li>
                </ul>
            </div>
           
            <button className="suggestions__add-btn">+ Add Feedback</button>
        </div>
    )
}

export default Suggestions;