import React from "react";
import styles from "./FloorRefinishing.module.css";
import experienceIcon from "./Icons/experience.png";
import Buildings from "./Icons/building.png";
import Customers from "./Icons/customer.png";

function Status() {
  const statusItems = [
    {
      icon: experienceIcon,
      number: "10+",
      label: "Experience",
    },
    {
      icon: Buildings,
      number: "6+",
      label: "Buildings",
    },
    {
      icon: Customers,
      number: "500+",
      label: "Customers",
    },
  ];

  return (
    <section className={styles.statusSection}>
      <h2 className={styles.statusTitle}>Our Status</h2>
      <div className={styles.statusItems}>
        {statusItems.map((item, index) => (
          <div key={index} className={styles.statusItem}>
            <img src={item.icon} alt="" className={styles.statusIcon} />
            <div className={styles.statusContent}>
              <div className={styles.statusNumber}>{item.number}</div>
              <div className={styles.statusLabel}>{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Status;
