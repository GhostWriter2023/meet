import React from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;
        console.log("NOE is ", value);
        
        let infoText; // Check if the value is a number and greater than 0
        if (isNaN(value) || value <= 0) {
          infoText = "Only positive numbers are allowed";
        } else {
          infoText = "";
          setCurrentNOE(value);
        }
        setErrorAlert(infoText);
    };

    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events: </label>
            <input 
            type="text"
            id="number-of-events-input"
            className="number-of-events-input"
            defaultValue="32"
            onChange={handleInputChanged}
            />
        </div>
    );
}

export default NumberOfEvents;