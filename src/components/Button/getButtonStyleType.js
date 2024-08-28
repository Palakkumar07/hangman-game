function getButtonStyling(styleType){
    
    const primaryButtonStyling = "bg-blue-500 border-blue-700 hover:bg-blue-700 hover:border-blue-900 ";

    const secondaryButtonStyling = "bg-orange-500 border-orange-700 hover:bg-orange-700 hover:border-orange-900";

    const warningButtonStyling = "bg-yellow-500 border-yellow-700 hover:bg-yellow-700 hover:border-yellow-900";

    if(styleType === "primary") {
        return primaryButtonStyling;
    }
    else if (styleType === "secondary") {
        return secondaryButtonStyling;
    }
    else if (styleType === "warning") {
        return warningButtonStyling;
    }
}

export default getButtonStyling;