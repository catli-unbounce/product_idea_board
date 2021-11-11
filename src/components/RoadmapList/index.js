import React, { useState, useEffect } from 'react';
import Banner from '../Banner';
import RoadmapListItem from '../RoadmapListItem';
import {useWindowDimensions} from '../../helpers.js';
import backIcon from '../../assets/shared/icon-arrow-left.svg';
import {useHistory} from "react-router-dom";
const RoadmapList = ({planned, inProgress, live, upvote}) => {

    const [activeNav, setActiveNav] = useState(['planned']);
    const [width, setWidth] = useState(window.innerWidth);
    let history = useHistory();
    const handleResize = () => { 
        setWidth(window.innerWidth);
        console.log(window.innerWidth)
        if(window.innerWidth > 750) {
            console.log("HERE")
            setActiveNav(['planned', 'live', 'in-progress']);
        } else {
            setActiveNav(['planned']);
        }
        console.log(activeNav);
    }
    useEffect(() => {
        if(window.innerWidth > 750) {
            setActiveNav(['planned', 'live', 'in-progress']);
        } 
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
      }, []);

    const plannedList = planned.map((item, index) => {
        return (
            <RoadmapListItem key={index} {...item} upvote={upvote}></RoadmapListItem>
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
            <div className="go-back">
                        <img alt="back" src={backIcon}></img><a href="#" onClick={() => history.goBack()}>Go Back</a>
                    </div>
            <Banner><div>Roadmap</div></Banner>
            <div className="roadmap_list__mobile-nav">
                <h4 onClick={() => setActiveNav(['planned'])} className={activeNav.includes('planned') ? "active" : ""}>Planned</h4>
                <h4 onClick={() => setActiveNav(['in-progress'])} className={activeNav.includes('in-progress') ? "active" : ""}>In Progress</h4>
                <h4 onClick={() => setActiveNav(['live'])} className={activeNav.includes('live') ? "active" : ""}>Live</h4>
            </div>
            
            <div className="roadmap_list__container">
                {activeNav.includes("planned") &&
                    <div className="roadmap_list__planned"><h4>Planned({plannedList.length ? plannedList.length : 0})</h4>{plannedList}</div>
                }
                {activeNav.includes("in-progress") &&
                    <div className="roadmap_list__inProgress"><h4>In Progress({inProgress.length ? inProgress.length : 0})</h4>{inProgressList}</div>
                }

                {activeNav.includes("live") &&
                    <div className="roadmap_list__live"><h4>Live({live.length ? live.length : 0})</h4>{liveList}</div>
                }
                
            </div>
        </div>
    )
}

export default RoadmapList;