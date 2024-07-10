import React from "react";
import styles from "./FloorRefinishing.module.css";
import divider from "./Icons/divider.svg"
import servicesBackground from "./Icons/services-background.png";

function Hero() {
  return (
    <section className={styles.heroSection}>
      <img src={servicesBackground} className={styles.heroBackground} />
      <div className={styles.heroContent}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>Floor Refinishing</h1>
          <div className={styles.heroSubtitle}>
            <span>Services</span>
            <img src={divider} alt="" />
            <span className={styles.highlight}>Floor Refinishing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
