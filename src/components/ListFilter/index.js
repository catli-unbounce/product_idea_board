import React, { useState } from 'react';
const ListFilter = ({filters, filterRequests}) => {

 
    return (
        <div className="filters">
            <ul>
                <li onClick={() => filterRequests('all')} className={filters.includes('all') ? "filters__item filters__item-active": "filters__item"}>All</li>
                <li onClick={() => filterRequests('ui')} className={filters.includes('ui') ? "filters__item filters__item-active": "filters__item"}>UI</li>
                <li onClick={() => filterRequests('ux')} className={filters.includes('ux') ? "filters__item filters__item-active": "filters__item"}>UX</li>
                <li onClick={() => filterRequests('enhancement')} className={filters.includes('enhancement') ? "filters__item filters__item-active": "filters__item"}>Enhancement</li>
                <li onClick={() => filterRequests('bug')} className={filters.includes('bug') ? "filters__item filters__item-active": "filters__item"}>Bug</li>
                <li onClick={() => filterRequests('feature')} className={filters.includes('feature') ? "filters__item filters__item-active": "filters__item"}>Feature</li>
            </ul>
        </div>
    )
}

export default ListFilter;