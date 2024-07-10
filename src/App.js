import React from "react";
import styles from "./FloorRefinishing.module.css";
import Hero from "./Hero";
import Services from "./Services";
import Approach from "./Approach";
import TilingOptions from "./TilingOptions";
import CeramicSection from "./CeramicSection";
import Status from "./Status";
import CallToAction from "./CallToAction";

function FloorRefinishing() {
  return (
    <main className={styles.mainContainer}>
      <Hero />
      <Services />
      <Approach />
      <div className={styles.shrinkContainer}>
        <section className={styles.logistics}>
          <h2 className={styles.logisticsTitle}>Efficient Logistics and Timely Delivery</h2>
          <p className={styles.logisticsDescription}>
            At Chinar Minerals, efficient logistics and timely delivery are the
            cornerstones of our commitment to client satisfaction. Our
            comprehensive approach encompasses customized logistics planning, a
            robust global transportation network, and real-time monitoring to
            ensure that every shipment is delivered on schedule and in perfect
            condition. By understanding and adapting to each client's unique
            needs and employing a combination of advanced scheduling tools,
            diverse transportation modes, and strict quality control measures,
            we guarantee a seamless delivery process from our facility to your
            doorstep. Our dedicated team works tirelessly, leveraging
            partnerships with reputable carriers and employing responsive
            problem-solving strategies, to uphold our promise of efficiency,
            reliability, and excellence in every delivery, reinforcing our role
            as a trusted partner in your success.
          </p>
        </section>
      </div>
      <div className={styles.shrinkContainer}>
        <TilingOptions />
      </div>
      <div className={styles.shrinkContainer}>
        <CeramicSection />
      </div>
      <Status />
      <CallToAction />
    </main>
  );
}

export default FloorRefinishing;
