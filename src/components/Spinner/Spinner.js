import React from 'react';
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <span className="spinner-inner-1"></span>
                <span className="spinner-inner-2"></span>
                <span className="spinner-inner-3"></span>
            </div>
        </div>
        
    )
}

export default Spinner;
