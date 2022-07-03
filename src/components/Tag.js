import React from "react";
import styles from "../styles/Global";
export default function Tag({ tagTitle }) {
  return <div className={`${styles.tag}`}>{tagTitle}</div>;
}
