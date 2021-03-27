import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({children, isRounded, ...otherProps}) => (

    <button {...otherProps} className={`
    ${isRounded ? 'ronded': ''} 
    custom-button`}>
        { children }
    </button>
);

export default CustomButton;
