import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type Props = {
  title: string;
  completed: boolean;
  onDeleteButton: (text: string) => void;
  onCompleteButton: (text: string) => void;
}

export function Assignment({ title, completed, onDeleteButton, onCompleteButton }: Props) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => onCompleteButton(title)}>
        {completed ? <div className={styles.completedCheck} /> : null}
      </button>

      <p className={completed ? styles.completed : ''}>{title}</p>

      <button className={styles.deleteButton} onClick={() => onDeleteButton(title)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
