import React from "react";
import styles from "./FloorRefinishing.module.css";
import ctaImage from "./Icons/ctaImage.png";

function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div>
        <img
          src={ctaImage}
          alt="Call to action background"
          className={styles.ctaBackground}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            inset: 0,
            position: "absolute",
            background: "rgba(0, 0, 0, 0.56)",
          }}
        />
      </div>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Have a project in mind</h2>
        <button className={styles.ctaButton}>View the Sheets</button>
      </div>
    </section>
  );
}

export default CallToAction;
