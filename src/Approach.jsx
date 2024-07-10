import React from "react";
import styles from "./FloorRefinishing.module.css";
import ApproachCard from "./ApproachCard";
import approch from "./Icons/approch.png";
import client from "./Icons/client-customization.png";
import innovativeImage from "./Icons/innovative.png";
import sustainableImage from "./Icons/Clip path group.png";

function Approach() {
  const approachCards = [
    {
      image: client,
      title: "Client-Centric Customization",
      description:
        "We believe each client is unique, and so are their needs. Our approach is to listen closely, understand the specific requirements, and provide customized solutions that deliver beyond expectations.",
    },
    {
      image:innovativeImage,
      title: "Innovative Solutions",
      description:
        "Staying at the forefront of technology, we continuously seek innovative methods and techniques to improve our services. This positions us as industry leaders, providing our clients with cutting-edge solutions that offer enhanced efficiency and value.",
    },
    {
      image:sustainableImage,
      title: "Sustainable Practices",
      description:
        "Our commitment to sustainability is unwavering. We adopt environmentally responsible practices in all our operations, ensuring that we not only meet the current needs of our clients but also protect the future of our planet.",
    },
  ];

  return (
    <section className={styles.approachSection}>
      <div className={styles.approachBackground}>
        <div>
          <img src={approch} className={styles.approachBackgroundImage} />
          <div
            style={{
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
              position: "absolute",
              background: "rgba(0, 0, 0, 0.50)",
            }}
          />
        </div>

        <div className={styles.approachContent}>
          <h2 className={styles.approachTitle}>
            Our approach <br /> and <br /> position
          </h2>
          <p className={styles.approachDescription}>
            We recognise our business interacts with a range of material
            sustainability issue areas
          </p>
        </div>
      </div>
      <div className={styles.approchCardParent}>
        <div className={styles.approachCardsContainer}>
          <div className={styles.approachCards}>
            {approachCards.map((card, index) => (
              <ApproachCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approach;
