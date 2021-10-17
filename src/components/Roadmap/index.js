import React, { useState } from 'react';
const Roadmap = () => {
    return (
        <div className="roadmap">
            <ul>
                <li className="title">Roadmap <a href="#">View</a></li>
                <li className="roadmap__item">Planned <span className="count">5</span></li>
                <li className="roadmap__item">In Progress <span className="count">5</span></li>
                <li className="roadmap__item">Live <span className="count">5</span></li>
            </ul>
        </div>
    )
}

export default Roadmap;