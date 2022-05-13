import React from "react";
import styles from "../../styles/About.module.scss";
import Cube from "./Floater";
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
                I am a resilient full stack developer ready to provide value
                with my skillset of frameworks and problem solving cababilities.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt ducimus voluptate, odio ipsam nobis reprehenderit fugit
                itaque nam! Perspiciatis, nisi!
              </p>
            </div>
            <div className={styles["content-about"]}>
              <h5>An agile collaborator</h5>

              <p>
                I worked on a project with a team using agile principles to
                deliver the best software, and always stay attuned to the newest
                frameworks. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Eligendi enim repudiandae non quibusdam suscipit iusto eum
                dolore corrupti dolor id rerum quod, iure nulla quo esse ex
                voluptas, doloremque amet.
              </p>
            </div>
          </div>

          <div className={styles["cube-container"]}>
            <Cube />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
