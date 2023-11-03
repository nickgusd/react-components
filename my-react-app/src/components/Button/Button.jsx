import styles from "./Button.module.css";

export default function Button({ title, onClick }) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <p>{title}</p>
    </div>
  );
}
