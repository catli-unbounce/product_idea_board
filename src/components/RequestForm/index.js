import React, { useState } from 'react';
const RequestForm = () => {
 
    return (
        <form>
            <h1>Create New Feedback</h1>

            <label>
                <h3 className="label">Feedback Title</h3>
                <p className="label-desc">Add a short, descriptive headline</p>
                <input className="text-input" name="name" />
            </label>

            
            <button type="submit">Submit</button>
        </form>
    )
}

export default RequestForm;