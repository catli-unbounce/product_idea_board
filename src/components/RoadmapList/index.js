import React, { useState } from 'react';
import Banner from '../Banner';
import RoadmapListItem from '../RoadmapListItem'
const RoadmapList = ({planned, inProgress, live}) => {
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
            <Banner>Roadmap</Banner>
            <div className="roadmap_list__container">
                <div className="roadmap_list__planned"><h4>Planned</h4>{plannedList}</div>
                <div className="roadmap_list__inProgress"><h4>In Progress</h4>{inProgressList}</div>
                <div className="roadmap_list__live"><h4>Live</h4>{liveList}</div>
            </div>
                
            
        </div>
    )
}

export default RoadmapList;