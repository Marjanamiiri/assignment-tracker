import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type Props = {
  title: string;
  completed: boolean;
  onDeleteButton: (text: string) => void;
  onCompleteButton: (text: string) => void;
  deadline: Date; // Add the deadline prop
};

export function Assignment({ title, completed, onDeleteButton, onCompleteButton, deadline }: Props) {
  // Calculate days remaining until the deadline
  const today = new Date();
  
  if (deadline) {
    const diffInDays = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    // Determine the bubble class based on the remaining days
    let bubbleClass = styles.bubble;
    if (diffInDays === 1) {
      bubbleClass += ` ${styles.oneDayAway}`;
    }
    
    return (
      <div className={styles.assignment}>
        <button className={styles.checkContainer} onClick={() => onCompleteButton(title)}>
          <div className={styles.checkContainer}>
            {completed ? <div className={styles.checkContainerCompleted} /> : null}
          </div>
        </button>
  
        <p className={completed ? styles.textCompleted : ''}>{title}</p>
  
        <span className={bubbleClass}>
          {diffInDays === 1 ? 'Tomorrow' : `${diffInDays} days`}
        </span>

        <button className={styles.deleteButton} onClick={() => onDeleteButton(title)}>
          <TbTrash size={20} />
        </button>
      </div>
    );
  } else {
    // Handle the case where 'deadline' is not defined (null or undefined)
    return (
      <div className={styles.assignment}>
        <p className={completed ? styles.textCompleted : ''}>{title}</p>
        <button className={styles.deleteButton} onClick={() => onDeleteButton(title)}>
          <TbTrash size={20} />
        </button>
      </div>
    );
  }
}
