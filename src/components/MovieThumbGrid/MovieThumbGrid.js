import React from 'react';
import './MovieThumbGrid.scss';

const MovieThumbGrid = ({ header, loading, children }) => {
    const renderItems = () => {
        const gridItems = children.map((item, i) => (
            <div key={i} className="grid-item">
                {item}
            </div>
        ))
        return gridItems;
    }

    return (
        <div className="movie-container">
            {header && !loading ? <h1>{header}</h1> : null}
            <div className="movie-items">
                {renderItems()}
            </div>
        </div>
        
    )
}

export default MovieThumbGrid
