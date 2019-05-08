import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Author extends Component {
    render(){
        return(
            <h1>{this.props.author}</h1>
        );
    }
}

Author.propTypes = {
    author: PropTypes.string.isRequired
}

Author.defaultProps = {
    author: 'Default Author'
}