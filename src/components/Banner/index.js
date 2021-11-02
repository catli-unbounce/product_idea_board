import React, { useState } from 'react';
import suggestionIcon from '../../assets/suggestions/icon-suggestions.svg'
import {Link} from "react-router-dom";
const Banner = ({children}) => {
    return (
        <div className="banner">
            <div className="banner__info">
                {children}
            </div>
            <Link className="banner__add-feedback-link" to="/new"><button className="banner__add-btn">+ Add Feedback</button></Link>
        </div>
    )
}

export default Banner;