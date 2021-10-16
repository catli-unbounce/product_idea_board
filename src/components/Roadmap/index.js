import React, { useState } from 'react';
const Roadmap = () => {
    return (
        <div className="roadmap">
            <ul>
                <li className="title">Roadmap <span className="roadmap__view-more">View</span></li>
                <li className="roadmap__item">Planned <span>5</span></li>
                <li className="roadmap__item">In Progress</li>
                <li className="roadmap__item">Live</li>
            </ul>
        </div>
    )
}

export default Roadmap;