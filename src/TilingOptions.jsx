import React from "react";
import styles from "./FloorRefinishing.module.css";
import tileImage from "./Icons/tileImage.jpg";

function TilingOptions() {
  return (
    <section className={`${styles.tilingOptionsSection} `}>
      <img
        src={tileImage}
        alt="Tiling options"
        className={styles.tilingImage}
      />
      <div className={styles.tilingContent}>
        <h2 className={styles.tilingTitle}>Tiling Options</h2>
        <p className={styles.tilingDescription}>
          Understanding the importance of quality and compliance, we offer
          thorough mineral analysis services. Our state-of-the-art laboratory
          facilities are equipped with advanced analytical tools to perform
          detailed examinations. These include compositional analysis, particle
          size distribution, purity checks, and more. Our skilled
        </p>
        <button className={styles.callToActionButton}>Call us Today</button>
      </div>
    </section>
  );
}

export default TilingOptions;
