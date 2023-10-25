import { useState } from 'react';
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: { title: string; completed: boolean }[];
  onDeleteAssignment: (text: string) => void;
  onCompleteAssignment: (text: string) => void;
}

export function Assignments({ assignments, onDeleteAssignment, onCompleteAssignment }: Props) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{assignments.filter((assignment) => assignment.completed).length} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment.title}
            completed={assignment.completed}
            onDeleteButton={onDeleteAssignment}
            onCompleteButton={onCompleteAssignment}
          />
        ))}
      </div>
    </section>
  );
}
