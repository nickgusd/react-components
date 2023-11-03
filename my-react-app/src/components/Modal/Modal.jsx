import { useState } from "react";
import Button from "../Button/Button";
import { FiXCircle } from "react-icons/fi";

import styles from "./Modal.module.css";

export default function Modal({ title, content, footer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button title="Open" onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.header} onClick={() => setIsOpen(false)}>
            <FiXCircle />
          </div>
          <div className={styles.content_wrapper}>
            <div className={styles.title}>
              <h1>{title}</h1>
            </div>
            <div className={styles.body}>{content}</div>
            <div className={styles.footer}>{footer}</div>
          </div>
        </div>
      )}
    </div>
  );
}
