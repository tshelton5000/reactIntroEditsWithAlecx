import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
    render(){
        return(
            <h1>{this.props.title}</h1>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

Title.defaultProps = {
    title: 'Default Title'
}