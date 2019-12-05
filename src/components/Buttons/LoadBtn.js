import React from 'react'
import './Buttons.scss'
const LoadBtn = ({text, onClick}) => {
    return (
        <div className="btn btn-load" onClick={onClick}>
            <button>{text}</button>
        </div>
    )
}

export default LoadBtn;
