import React, { useState } from 'react';
import newFeedbackIcon from '../../assets/shared/icon-new-feedback.svg';
import arrowDownIcon from '../../assets/shared/icon-arrow-down.svg';
import checkIcon from '../../assets/shared/icon-check.svg';
import { useHistory } from "react-router-dom";
const RequestForm = () => {
    let history = useHistory();
    return (
        <form className="form">
            <img className="new-icon" src={newFeedbackIcon}></img>
            <h1>Create New Feedback</h1>
            <label>
                <h5 className="label">Feedback Title</h5>
                <p className="label-desc">Add a short, descriptive headline</p>
                <input className="text-input" name="name" />
            </label>

            <label>
                <h5 className="label">Category</h5>
                <p className="label-desc">Choose a category for your feedback</p>
                <li className="text-input first-option" value="feature">Feature<img src={arrowDownIcon}></img></li>
                <ul className="dropdown form__select-category">
                    <li className="select-input" value="ui">Feature<img className="check-icon" src={checkIcon}></img></li>
                    <li className="select-input" value="ui">UI</li>
                    <li className="select-input" value="ux">UX</li>
                    <li className="select-input" value="enhancement">Enhancement</li>
                    <li className="select-input" value="bug">Bug</li>
                </ul>

            </label>

            <label>
                <h5 className="label">Feedback Detail</h5>
                <p className="label-desc">Include any specific comments on what should be improved, added, etc.</p>
                <textarea className="text-input" name="name" />
            </label>
            <div className="form__btn-container">
                <button className="cancel">Cancel</button>
                            <button type="submit">Add Feedback</button>
            </div>
            
        </form>
    )
}

export default RequestForm;