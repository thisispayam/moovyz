import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import './Search.scss';

class Search extends Component {
    state = {
        value : ""
    }
    // clearing the old timeout
    timeout = null;

    onSearch = (event) => {
        // ES6 Destructuring prop
        const { callback } = this.props;

        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);
        // Set a timeout to wait for the user to stop writing
        // So we don´t have to make unnessesary calls
        this.timeout = setTimeout(() => {
            callback(this.state.value);
        }, 500);
    }


    render() {
        const { value } = this.state;
        return(
            <div className="search">
                <div className="search-content">
                    <FontAwesome className="fa-search" name="search" size="2x" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        onChange={this.onSearch}
                        value={value}
                    />
                </div>
            </div>
        )
    }
}
Search.propTypes = {
    callback: PropTypes.func
}

export default Search