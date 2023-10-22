import React, { useState } from 'react';
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type Props = {
  inputText: string;
  onClickInput: () => void;
  onClickButton: () => void;
}

export function Header({ onClickInput, onClickButton, inputText }: Props) {
  const [inputValue, setInputValue] = useState(inputText);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
        <button onClick={onClickButton} disabled={!inputValue.trim().length}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
