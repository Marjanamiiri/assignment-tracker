import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import React, { useState } from 'react';
function App() {
  // const onClickButton = (inputValue: any) => {
  //   console.log("Input value:", inputValue);
  //   // Implement your logic here to further process the input value
  // };
  const [assignments, setAssignments] = useState([]);

  // Function to create a new assignment and add it to the list
  const createAssignment = (newAssignment: any) => {
    setAssignments([...assignments, newAssignment]);
  };

  return (
    <>
      <Header onClickInput={() => {}} onCreateAssignment={createAssignment} />
      <Assignments assignments={assignments} />
    </>
  );
}

export default App;
