import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type Props = {
  title: string;
  onClickConatanier: () => void;
  onDeleteButton: () => void;
}
export function Assignment({ title, onClickConatanier, onDeleteButton }: Props) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}
              onClick={onClickConatanier}>
        <div />
      </button>

      <p>{title}</p>

      <button className={styles.deleteButton}
              onClick={onDeleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
