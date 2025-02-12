import React from "react";
import styles from "../../styles/About.module.scss";
import Cube from "./Floater";
import Footer from "./Footer";
const Aboutme = ({ aboutPageRef }) => {
  return (
    <>
      <div ref={aboutPageRef} className={styles["about-page"]}>
        <div className={styles["about-title"]}>
          <h1>About Me</h1>
        </div>
        <div className={styles["about-row"]}>
          <div className={styles["about-column"]}>
            <div className={styles["content-about"]}>
              <h5>Motivated to produce results</h5>

              <p>
                I am a resilient full-stack developer, ready to deliver value
                through my expertise in frameworks and problem-solving
                capabilities. I am committed to tackling complex challenges and
                contributing to impactful projects with my technical skills and
                adaptability.
              </p>
            </div>
            <div className={styles["content-about"]}>
              <h5>An agile collaborator</h5>

              <p>
                I am an agile collaborator, adept at working within fast-paced,
                cross-functional teams. I thrive in environments that emphasize
                flexibility and continuous improvement, and I am dedicated to
                delivering results through effective communication and teamwork.
              </p>
            </div>
          </div>

          <div className={styles["cube-container"]}>
            <Cube />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Aboutme;
