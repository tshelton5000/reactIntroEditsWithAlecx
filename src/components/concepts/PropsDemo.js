import React from 'react';

const PropsDemo = () => {
    
    return (
        <div>
            <FunctionalComponent />
        </div>
    );
};

const FunctionalComponent = (props) => {

    return (
        <div>
            <p>{ props.string }</p>
        </div>
    );
};

export default PropsDemo;