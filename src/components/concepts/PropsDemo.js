import React, { useState } from 'react';

const PropsDemo = () => {
    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

    let styles = {
        color : color,
        backgroundColor : backgroundColor,
        borderRadius : borderRadius,
        borderStyle : borderStyle,
        display : display,
        width : width,
        textAlign : textAlign
    }

    return (
        <div className="main">
            <div className="mainDiv">
                <div style={ styles }>
                    <FunctionalComponent string="will this display?" />
                    {/* challenge one answer */}
                    <FunctionalComponent string="Props are pretty cool right?" />
                    <FunctionalComponent string="You can send data from one component ..." />
                    <FunctionalComponent string=" ... to another!" />
                </div>
            </div>
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