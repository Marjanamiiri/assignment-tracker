import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

function App() {
  const [assignments, setAssignments] = useState([]);

  // Function to create a new assignment and add it to the list
  const createAssignment = (newAssignment) => {
    setAssignments([...assignments, { title: newAssignment, completed: false }]);
  };

  // Function to delete an assignment
  const deleteAssignment = (assignmentTitle) => {
    const updatedAssignments = assignments.filter((assignment) => assignment.title !== assignmentTitle);
    setAssignments(updatedAssignments);
  };

  // Function to mark an assignment as completed
  const completeAssignment = (assignmentTitle) => {
    const updatedAssignments = assignments.map((assignment) => {
      if (assignment.title === assignmentTitle) {
        return { ...assignment, completed: !assignment.completed };
      }
      return assignment;
    });
    setAssignments(updatedAssignments);
  };

  return (
    <>
      <Header onClickInput={() => {}} onCreateAssignment={createAssignment} />
      <Assignments assignments={assignments} onDeleteAssignment={deleteAssignment} onCompleteAssignment={completeAssignment} />
    </>
  );
}

export default App;
