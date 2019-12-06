import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../helpers.js';
import './MovieInfo.scss';

const MovieInfoBar = ({ time, budget, revenue, release }) => (
    <div className="movieinfobar">
        <div className="movieinfobar-content grid-res">
            {time ? 
            <div className="movieinfobar-content-col">
                <FontAwesome className="fa-time" name="clock-o" size="2x" />
                    <span className="movieinfobar-info"><h3>RUNNING TIME: </h3> {calcTime(time)}</span>
            </div> : null}
            {budget > 0 ? 
            <div className="movieinfobar-content-col">
                <FontAwesome className="fa-budget" name="money" size="2x" />
                    <span className="movieinfobar-info"><h3>BUDGET: </h3>{convertMoney(budget)}</span>
            </div> : null }
            {revenue ? 
            <div className="movieinfobar-content-col">
                <FontAwesome className="fa-revenue" name="ticket" size="2x" />
                    <span className="movieinfobar-info"><h3>REVENUE: </h3>{convertMoney(revenue)}</span>
            </div> : null}
            {release ? 
            <div className="movieinfobar-content-col">
                <FontAwesome className="fa-revenue" name="ticket" size="2x" />
                <span className="movieinfobar-info"><h3>RELEASE: </h3>{release}</span>
            </div> : null}
        </div>
    </div>
)

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;