import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import styles from "./accordian.module.css";

export default function Accordian({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.header}>
          <p>{title}</p>
          <div className={styles.iconWrapper}>
            {isOpen && (
              <FiMinus
                className={styles.icon}
                onClick={() => setIsOpen(false)}
              />
            )}
            {!isOpen && (
              <FiPlus className={styles.icon} onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
        {isOpen && <div className={styles.body}>{text}</div>}
      </div>
    </div>
  );
}
