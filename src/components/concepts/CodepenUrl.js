import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CodepenUrl extends Component {
    render(){
        return(
            <h1>{this.props.codepenUrl}</h1>
        );
    }
}

CodepenUrl.propTypes = {
    codepenUrl: PropTypes.string.isRequired
}

CodepenUrl.defaultProps = {
    codepenUrl: 'Default Url'
}