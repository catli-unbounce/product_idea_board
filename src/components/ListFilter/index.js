import React, { useState } from 'react';
const ListFilter = () => {
    return (
        <div className="filters">
            <ul>
                <li className="filters__item filters__item-active">All</li>
                <li className="filters__item filters__item-active">UI</li>
                <li className="filters__item filters__item-active">UX</li>
                <li className="filters__item">Enhancement</li>
                <li className="filters__item">Bug</li>
                <li className="filters__item">Feature</li>
            </ul>
        </div>
    )
}

export default ListFilter;