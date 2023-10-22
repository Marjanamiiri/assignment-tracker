import React, { useState } from 'react';
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type Props = {

  onClickInput: () => void;
  onCreateAssignment: (newAssignment: any) => void;
}

export function Header({ onClickInput, onCreateAssignment }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateAssignment = () => {
    if (inputValue.trim() !== '') {
      // Call the function passed from the parent component to create a new assignment
      onCreateAssignment(inputValue);
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onClick={onClickInput}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateAssignment} disabled={!inputValue.trim().length}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
