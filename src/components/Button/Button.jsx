import { useState } from "react";
import getButtonStyling from "./getButtonStyleType";


function Button({ text, buttonType, styleType, onClickHandler }) {



    return (
        <>
        <button 
            type={buttonType}
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(styleType)} bg-color to-blue-950 text-white rounded-md transition-all`}
            >
            {text}
        </button>
        </>
    );

}

export default Button;