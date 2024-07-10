import React from "react";
import styles from "./FloorRefinishing.module.css";
import floorImage from "./Icons/Floor.jpg";

function CeramicSection() {
  const ceramicItems = [
    {
      title: "Ceramic",
      description:
        "Understanding the importance of quality and compliance, we offer thorough mineral analysis services. Our state-of-the-art laboratory facilities are equipped with advanced analytical tools to perform detailed examinations.",
    },
    {
      title: "Ceramic",
      description:
        "Understanding the importance of quality and compliance, we offer thorough mineral analysis services. Our state-of-the-art laboratory facilities are equipped with advanced analytical tools to perform detailed examinations.",
    },
    {
      title: "Ceramic",
      description:
        "Understanding the importance of quality and compliance, we offer thorough mineral analysis services. Our state-of-the-art laboratory facilities are equipped with advanced analytical tools to perform detailed examinations.",
    },
  ];

  return (
    <section className={styles.ceramicSection}>
      {ceramicItems.map((item, index) => (
        <div className={styles.ceramicContainer}>
            <img
              src={floorImage}
              alt={`Ceramic tile`}
              className={styles.ceramicImage}
            />
            <div className={styles.ceramicItem}>
              <h3 className={styles.ceramicTitle}>{item.title}</h3>
              <p className={styles.ceramicDescription}>{item.description}</p>
            </div>
        </div>
      ))}
    </section>
  );
}

export default CeramicSection;
