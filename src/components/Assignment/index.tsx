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
        <div className={styles.checkContainer}>
        {completed ? <div className={styles.checkContainerCompleted} /> : null}
          </div>
      </button>

      <p className={completed ? styles.textCompleted : ''}>{title}</p>

      <button className={styles.deleteButton} onClick={() => onDeleteButton(title)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
