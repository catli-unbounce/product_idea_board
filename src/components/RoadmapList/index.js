import React, { useState } from 'react';
import Banner from '../Banner';
import RoadmapListItem from '../RoadmapListItem'
const RoadmapList = ({planned, inProgress, live}) => {

    const [activeNav, setActiveNav] = useState('planned');
    const plannedList = planned.map((item, index) => {
        return (
            <RoadmapListItem key={index} {...item}></RoadmapListItem>
        )
    })

    const inProgressList = inProgress.map((item, index) => {
        return (
            <RoadmapListItem key={index} {...item}></RoadmapListItem>
        )
    })

    const liveList = live.map((item, index) => {
        return (
            <RoadmapListItem key={index} {...item}></RoadmapListItem>
        )
    })
    return (
        <div className="roadmap_list">
            <Banner><div>Roadmap</div></Banner>
            <div className="roadmap_list__mobile-nav">
                <h4 onClick={() => setActiveNav('planned')} className={activeNav === 'planned' && "active"}>Planned</h4>
                <h4 onClick={() => setActiveNav('in-progress')} className={activeNav === 'in-progress' && "active"}>In Progress</h4>
                <h4 onClick={() => setActiveNav('live')} className={activeNav === 'live' && "active"}>Live</h4>
            </div>
            
            <div className="roadmap_list__container">
                <div className="roadmap_list__planned"><h4>Planned({plannedList.length ? plannedList.length : 0})</h4>{plannedList}</div>
                <div className="roadmap_list__inProgress"><h4>In Progress({inProgress.length ? inProgress.length : 0})</h4>{inProgressList}</div>
                <div className="roadmap_list__live"><h4>Live({live.length ? live.length : 0})</h4>{liveList}</div>
            </div>
        </div>
    )
}

export default RoadmapList;