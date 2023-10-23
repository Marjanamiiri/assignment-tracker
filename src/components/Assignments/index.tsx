import { useState } from 'react';
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: string[];
}

export function Assignments({ assignments }: Props) {
  const [hiddenAssignments, setHiddenAssignments] = useState<boolean[]>(Array(assignments.length).fill(false));

  const onClickConatanier = (index: number) => {
    // Toggle the checked status of the assignment by index
    const newHiddenAssignments = [...hiddenAssignments];
    newHiddenAssignments[index] = !newHiddenAssignments[index];
    setHiddenAssignments(newHiddenAssignments);
  };

  const onDeleteButton = (index: number) => {
    // Hide the assignment by index
    const newHiddenAssignments = [...hiddenAssignments];
    newHiddenAssignments[index] = true;
    setHiddenAssignments(newHiddenAssignments);
  };

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment}
            onClickConatanier={() => onClickConatanier(index)}
            onDeleteButton={() => onDeleteButton(index)}
            
          />
        ))}
      </div>
    </section>
  );
}
