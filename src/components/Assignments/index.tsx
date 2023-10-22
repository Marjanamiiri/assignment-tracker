import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: string[];
}

export function Assignments({ assignments }: Props) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
      <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment key={index} title={assignment} />
        ))}
      </div>
    </section>
  );
}
