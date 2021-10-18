import React, { useState } from 'react';
import suggestionIcon from '../../assets/suggestions/icon-suggestions.svg'
const Suggestions = () => {
    return (
        <div className="suggestions">
            <div className="suggestions__info">
                <img src={suggestionIcon} alt="suggestions icon"></img> 6 Suggestions
                <span className="sort-by">Sort By:</span>
            </div>
           
            <button className="suggestions__add-btn">+ Add Feedback</button>
        </div>
    )
}

export default Suggestions;