import styles from "./ToggleButton.module.css";

export default function ToggleButton({ icon, active, onClick, index }) {
  const activeClass = active === index ? styles.active : "";

  return (
    <div
      className={`${styles.button_wrapper} ${activeClass} `}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
