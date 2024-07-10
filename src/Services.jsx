import React from "react";
import { useState } from "react";
import styles from "./FloorRefinishing.module.css";

function Services() {
  const [activeService, setActiveService] = useState(0);
  const servicesList = [
    {
      label: "Floor Refinishing",
      description:
        "Understanding the importance of quality and compliance, we offer thorough mineral analysis services. Our state-of-the-art laboratory facilities are equipped with advanced analytical tools to perform detailed examinations. These include compositional analysis, particle size distribution, purity checks, and more. Our skilled technicians ensure that each product adheres to strict industry standards and client specifications.",
    },
    {
      label: "Exterior",
      description:
        "Understanding the importance of quality and compli"
    },
    {
      label: "Commercial",
      description:
        "Understanding the importance of quality and compliance, we offer thorough mineral analysis services. Our state-of-the-art laboratory facilities are equipped with advanced analytical tools to perform detailed examinations. These include compositional analysis, particle size distribution, purity checks, and more. Our skilled technicians ensure that each product adheres to strict industry standards and client specifications.",
    },
    {
      label: "Interior",
      description:
        "Understanding the importance of quality and compliance, we offer thorough mineral analysis services. Our state-of-the-art laboratory facilities are equipped with advanced analytical tools to perform detailed examinations. These include compositional analysis, particle size distribution, purity checks, and more. Our skilled technicians ensure that each product adheres to strict industry standards and client specifications.",
    },
  ];


  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>Our Services</h2>
          <div className={styles.serviceDivider} />
        </div>
        <div className={styles.servicesList}>
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={
                index === activeService ? styles.activeService : styles.service
              }
              onClick={() => setActiveService(index)}
            >
              {service.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.servicesDescription}>
        <h3 className={styles.descriptionTitle}>{servicesList[activeService].label}</h3>
        <p className={styles.descriptionText}>
          {servicesList[activeService].description}
        </p>
      </div>
    </section>
  );
}

export default Services;
