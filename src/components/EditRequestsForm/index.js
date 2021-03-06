import React, { useState, useEffect } from 'react';
import editFeedbackIcon from '../../assets/shared/icon-edit-feedback.svg';
import arrowDownIcon from '../../assets/shared/icon-arrow-down.svg';
import checkIcon from '../../assets/shared/icon-check.svg';
import {categoryNames} from '../../static'
import { useHistory, useParams } from "react-router-dom";
const EditRequestForm = ({allRequests, editRequest, deleteRequest}) => {
    
    let history = useHistory();
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [newRequest, setNewRequest] = useState({
        category: 'feature',
        title: '',
    })

    const params  = useParams();
    const requestId = parseInt(params.request_id);
    const originalRequest = allRequests.filter((item) => item.id === requestId)[0]; 
    useEffect(() => {
        
        setNewRequest(originalRequest);
    }, []);

    const updateRequest = (key, value) => {
        const formData = {...newRequest};
        formData[key] = value;
        setShowDropdown(false)
        setNewRequest(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editRequest(newRequest);
        history.push('/')
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteRequest(newRequest.id)
        history.push('/');
    }

    return (
        <form className="form">
            <img className="new-icon" src={editFeedbackIcon}></img>
            <h1>Editing '{originalRequest.title}'</h1>
            <label>
                <h5 className="label">Feedback Title</h5>
                <p className="label-desc">Add a short, descriptive headline</p>
                <input maxLength="100" onChange={(e) => updateRequest('title', e.target.value)} className="text-input" name="name" value={newRequest.title}/>
            </label>

            <label className="form__category">
                <h5 className="label">Category</h5>
                <p className="label-desc">Choose a category for your feedback</p>
                <li onClick={() => setShowDropdown(!showDropdown)} className="text-input first-option" value="feature">{categoryNames[newRequest.category]}<img src={arrowDownIcon}></img></li>
                {showDropdown &&
                    <ul className="dropdown form__select-category">
                        <li onClick={() => updateRequest('category', 'feature')} className="select-input" value="feature">Feature{newRequest.category === 'feature' && <img className="check-icon" src={checkIcon}></img>}</li>
                        <li onClick={() => updateRequest('category', 'ui')} className="select-input" value="ui">UI{newRequest.category === 'ui' && <img className="check-icon" src={checkIcon}></img>}</li>
                        <li onClick={() => updateRequest('category', 'ux')} className="select-input" value="ux">UX{newRequest.category === 'ux' && <img className="check-icon" src={checkIcon}></img>}</li>
                        <li onClick={() => updateRequest('category', 'enhancement')} className="select-input" value="enhancement">Enhancement{newRequest.category === 'enhancement' && <img className="check-icon" src={checkIcon}></img>}</li>
                        <li onClick={() => updateRequest('category','bug')} className="select-input" value="bug">Bug{newRequest.category === 'bug' && <img className="check-icon" src={checkIcon}></img>}</li>
                    </ul>
                }
            </label>

            <label>
                <h5 className="label">Feedback Detail</h5>
                <p className="label-desc">Include any specific comments on what should be improved, added, etc.</p>
                <textarea maxLength="250" onChange={(e) => updateRequest('description',e.target.value)} className="text-input" name="name" value={newRequest.description}/>
            </label>
            <div className="form__btn-container">
                <button onClick={(e) => handleDelete(e)} className="delete-btn edit-request">Delete</button>
                <button onClick={(e) => history.push('/')} className="btn--secondary cancel">Cancel</button>
                <button onClick={(e) => handleSubmit(e)} className="btn--primary" type="submit">Done</button>
            </div>
            
        </form>
    )
}

export default EditRequestForm;