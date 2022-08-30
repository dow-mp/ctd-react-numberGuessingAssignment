import React, { useState } from "react";
import Button from "./Button";

export const GuessControl = ({ onGuess }) => {
  const [ currentGuess, setCurrentGuess ] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess( event.target.value);
  }

  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess({ currentGuess: "" });
  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
