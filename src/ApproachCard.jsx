import React from "react";
import styles from "./FloorRefinishing.module.css";

function ApproachCard({ image, title, description }) {
  return (
    <div className={styles.approachCard}>
      <img src={image} alt={title} className={styles.approachCardImage} />
      <h3 className={styles.approachCardTitle}>{title}</h3>
      <p className={styles.approachCardDescription}>{description}</p>
    </div>
  );
}

export default ApproachCard;
