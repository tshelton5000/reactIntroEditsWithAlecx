import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const propsFromOutside = [
    {string: 'Color Toggle', function: 'colorToggle'},
    {string: 'Background Color Toggle', function: 'backgroundColorToggle'},
    {string: 'Border Radius Toggle', function: 'borderRadiusToggle'},
    {string: 'Border Style Toggle', function: 'borderStyleToggle'}
]

const PropsDemo = () => {
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('blue');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display] = useState('inline-block');
    const [width] = useState('300px');
    const [textAlign] = useState('center');

    let colorToggle = () => {
        color === 'white' ? setColor('red') : setColor('white');
    }

    let backgroundColorToggle = () => {
        backgroundColor === 'blue' ? setBackgroundColor('green') : setBackgroundColor('blue'); 
    }
    
    let borderRadiusToggle = () => {
        borderRadius === '5px' ? setBorderRadius('25px') : setBorderRadius('5px');
    }

    let borderStyleToggle = () => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }

    let functionPicker = (funcName) => {
        switch(funcName){
            case 'colorToggle':
                return colorToggle;
                break;
            case 'backgroundColorToggle':
                return backgroundColorToggle;
                break;
            case 'borderRadiusToggle':
                return borderRadiusToggle;
                break;
            case 'borderStyleToggle':
                return borderStyleToggle;
        }
            
    }

    const mapper = () => {
        return propsFromOutside.map((el, index) => {
            return(
                <FunctionalComp key={index} string={el.string} function={functionPicker(el.function)}/>
            )
        })
    }
    
    return(
        <div className="main">
            <div className="mainDiv">
                <div style={{color, backgroundColor, borderRadius, borderStyle, display, width, textAlign}}>
                    {mapper()}
                </div>
            </div>
        </div>
    )
}

export default PropsDemo;

const FunctionalComp = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
        </div>
    )
}

FunctionalComp.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired
}