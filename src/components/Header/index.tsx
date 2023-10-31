import React, { useState } from 'react';
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

type Props = {
  onClickInput: () => void;
  onCreateAssignment: (newAssignment: any, deadline: Date) => void;
  onSelectDate: (date: Date | undefined) => void;
}

export function Header({ onClickInput, onCreateAssignment, onSelectDate }: Props) {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState<Date | undefined>();
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateAssignment = () => {
    if (inputValue.trim() !== '') {
      // Call the function passed from the parent component to create a new assignment
      onCreateAssignment(inputValue);
      setInputValue(''); // Clear the input field
      setSelected(undefined);
    }
  };

  const openCalendar = () => {
    setShowCalendar(true);
  };

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

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
        {/* Date is here */}
        <button onClick={openCalendar}>Select Date</button>
        {showCalendar && (
          <div className={styles.calendarContainer}>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={date => {
                setSelected(date);
                onSelectDate(date);
                setShowCalendar(false);
              }}
              footer={selected ? <p>You picked {format(selected, 'PP')}.</p> : <p>Please pick a day.</p>}
            />
          </div>
        )}

        <button onClick={handleCreateAssignment} disabled={!inputValue.trim().length}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
