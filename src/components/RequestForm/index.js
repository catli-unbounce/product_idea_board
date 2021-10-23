import React, { useState } from 'react';
const RequestForm = () => {
 
    return (
        <form>
            <h1>Create New Feedback</h1>

            <label>
                <h5 className="label">Feedback Title</h5>
                <p className="label-desc">Add a short, descriptive headline</p>
                <input className="text-input" name="name" />
            </label>

            <label>
                <h5 className="label">Category</h5>
                <p className="label-desc">Choose a category for your feedback</p>
                <li value="feature">Feature</li>
                <ul className="select-input dropdown">
                    <li value="ui">UI</li>
                    <li value="ux">UX</li>
                    <li value="enhancement">Enhancement</li>
                    <li value="bug">Bug</li>
                </ul>

            </label>

            <label>
                <h5 className="label">Feedback Detail</h5>
                <p className="label-desc">Include any specific comments on what should be improved, added, etc.</p>
                <input className="text-input" name="name" />
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default RequestForm;