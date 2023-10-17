import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import React, { useState } from 'react'; // Import React and useState

export function Header() {
  const [inputText, setInputText] = useState(''); // State to store the input text

  // Function to handle input changes
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(event.target.value);
  };

  // Function to create a new assignment
  const createAssignment = () => {
    if (inputText.trim() !== '') { // Check if inputText is not empty (ignoring spaces)
      // You can add logic here to create a new assignment using the inputText.
      // For this example, we'll just clear the input field.
      setInputText('');
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          onClick={createAssignment}
          disabled={inputText.trim() === ''} // Disable the button when inputText is empty (ignoring spaces)
          style={{ cursor: inputText.trim() === '' ? 'not-allowed' : 'pointer' }} // Change cursor style
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
