import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { format } from 'date-fns';
import { useState } from "react";
import DatePicker from "react-datepicker";
 // Import the DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import the DatePicker styles

type Props = {
  onClickInput: () => void;
  onCreateAssignment: (newAssignment: any) => void;
}

export function Header({ onClickInput, onCreateAssignment }: Props) {
  const [inputValue, setInputValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Add state for the selected date

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateAssignment = () => {
    if (inputValue.trim() !== '') {
      // Call the function passed from the parent component to create a new assignment
      onCreateAssignment({
        title: inputValue,
        deadline: selectedDate, // Pass the selected deadline
      });
      setInputValue(''); // Clear the input field
      setSelectedDate(null); // Clear the selected date
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onClick={onClickInput}
          onChange={handleInputChange}
        />
        {/* Add the Date Picker */}
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          placeholderText="Select a deadline"
          dateFormat="MM/dd/yyyy" // Customize the date format
        />
        <button onClick={handleCreateAssignment} disabled={!inputValue.trim().length || !selectedDate}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
