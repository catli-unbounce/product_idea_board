import React, { useState } from 'react';
import newFeedbackIcon from '../../assets/shared/icon-new-feedback.svg';
import arrowDownIcon from '../../assets/shared/icon-arrow-down.svg';
import checkIcon from '../../assets/shared/icon-check.svg';
import { useHistory } from "react-router-dom";
const RequestForm = ({addNewRequest}) => {
    let history = useHistory();
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [newRequest, setNewRequest] = useState({
        category: 'feature',
        title: '',
        upvotes: 0,
        status: 'suggestion',
        description: '',
        comments: [],
        id: Math.floor(Math.random() * 10000)
    })

    const updateNewRequest = (key, value) => {
        const formData = {...newRequest};
        formData[key] = value;
        setNewRequest(formData)
    }

    const handleSelect = (value) => {
        updateNewRequest('category', value);
        setShowDropdown(!showDropdown)
    }

    const handleAddNewRequest = (e) => {
        e.preventDefault();
        addNewRequest(newRequest);
        history.push('/')
    }

    return (
        <form className="form">
            <img className="new-icon" src={newFeedbackIcon}></img>
            <h1>Create New Feedback</h1>
            <label>
                <h5 className="label">Feedback Title</h5>
                <p className="label-desc">Add a short, descriptive headline</p>
                <input onChange={(e) => updateNewRequest('title', e.target.value)} className="text-input" name="name" value={newRequest.title}/>
            </label>

            <label className="form__category">
                <h5 className="label">Category</h5>
                <p className="label-desc">Choose a category for your feedback</p>
                <li onClick={() => setShowDropdown(!showDropdown)} className="text-input first-option" value={newRequest.category}>{newRequest.category}<img src={arrowDownIcon}></img></li>
                {showDropdown &&
                    <ul className="dropdown form__select-category">
                        <li onClick={() => handleSelect('feature')} className="select-input" value="feature">Feature{newRequest.category === 'feature' && <img className="check-icon" src={checkIcon}></img>}</li>
                        <li onClick={() => handleSelect('ui')} className="select-input" value="ui">UI{newRequest.category === 'ui' && <img className="check-icon" src={checkIcon}></img>}</li>
                        <li onClick={() => handleSelect('ux')} className="select-input" value="ux">UX{newRequest.category === 'ux' && <img className="check-icon" src={checkIcon}></img>}</li>
                        <li onClick={() => handleSelect('enhancement')} className="select-input" value="enhancement">Enhancement{newRequest.category === 'enhancement' && <img className="check-icon" src={checkIcon}></img>}</li>
                        <li onClick={() => handleSelect('bug')} className="select-input" value="bug">Bug{newRequest.category === 'bug' && <img className="check-icon" src={checkIcon}></img>}</li>
                    </ul>
                }
            </label>

            <label>
                <h5 className="label">Feedback Detail</h5>
                <p className="label-desc">Include any specific comments on what should be improved, added, etc.</p>
                <textarea onChange={(e) => updateNewRequest('description',e.target.value)} className="text-input" name="name" value={newRequest.description}/>
            </label>
            <div className="form__btn-container">
                <button className="cancel">Cancel</button>
                <button onClick={(e) => handleAddNewRequest(e)} type="submit">Add Feedback</button>
            </div>
            
        </form>
    )
}

export default RequestForm;