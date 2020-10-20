import React from 'react';

const validationComponent = (props)=>{
    let validationText = 'Text too short';
    if( props.textLength >= 5){
        validationText = 'Text long enough';
    }
    return (
    <p>{props.textLength} {validationText}</p>
    )
};

export default validationComponent;