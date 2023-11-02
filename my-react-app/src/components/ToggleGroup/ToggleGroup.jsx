import { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";

import styles from "./ToggleGroup.module.css";

export default function ToggleGroup({ options }) {
  const [active, setActive] = useState(null);
  return (
    <div className={styles.wrapper}>
      {options.map((item, i) => (
        <ToggleButton
          key={i}
          icon={item.icon}
          index={i}
          onClick={() => setActive(i)}
          active={active}
        />
      ))}
    </div>
  );
}
