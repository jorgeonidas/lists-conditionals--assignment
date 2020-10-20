import React from 'react';

const validationComponent = (props)=>{
    let validationText = props.textLength > 5 ? "Text long enough":"Text too short"; 
    return (
    <p>{props.textLength} {validationText}</p>
    )
};

export default validationComponent;