import React, { useState } from 'react';
import suggestionIcon from '../../assets/suggestions/icon-suggestions.svg'
import {Link} from "react-router-dom";
const Banner = ({children}) => {
    return (
        <div className="banner">
            <div className="banner__info">
                {children}
            </div>
           
            <button className="banner__add-btn"><Link to="/new">+ Add Feedback</Link></button>
        </div>
    )
}

export default Banner;