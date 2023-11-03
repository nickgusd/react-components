import { useState, useRef, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import styles from "./Accordian.module.css";

export default function Accordian({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [offSetHeight, setOffSetHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
      setOffSetHeight(isOpen ? contentRef.current.clientHeight : 0);
    }
  }, [isOpen]);

  const containerStyle = {
    maxHeight: "0px",
    transform: `scaleY(${isOpen ? 1 : 0})`,
    transformOrigin: "top",
  };

  const expandedStyle = {
    minHeight: isOpen ? `${contentHeight + offSetHeight * 2}px` : "",
  };

  return (
    <div
      className={`${styles.container} `}
      style={expandedStyle}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.flex}>
        <div className={styles.header}>
          <p>{title}</p>
          <div className={styles.iconWrapper}>
            {isOpen && <FiMinus className={styles.icon} />}
            {!isOpen && <FiPlus className={styles.icon} />}
          </div>
        </div>
        {isOpen && (
          <div ref={contentRef} className={styles.body} style={containerStyle}>
            {text}
          </div>
        )}
      </div>
    </div>
  );
}
