import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    render(){
        return(
            <h1>{this.props.date}</h1>
        );
    }
}

Footer.propTypes = {
    date: PropTypes.string.isRequired
}

Footer.defaultProps = {
    date: 'Default Date'
}