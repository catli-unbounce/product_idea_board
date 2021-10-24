import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";
const Roadmap = ({planned, inProgress, live}) => {
    
    return (
        <div className="roadmap">
            <ul>
                <li className="title">Roadmap<Link to="/roadmap">View</Link></li>
                <li className="roadmap__item"><span className="dot orange"></span>Planned <span className="count">{planned.length}</span></li>
                <li className="roadmap__item"><span className="dot purple"></span>In Progress <span className="count">{inProgress.length}</span></li>
                <li className="roadmap__item"><span className="dot blue"></span>Live <span className="count">{live.length}</span></li>
            </ul>
        </div>
    )
}

export default Roadmap;