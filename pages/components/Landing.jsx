import React from "react";
import styles from "../../styles/Landing.module.scss";
const Landing = () => {
  return (
    <>
      <header>
        <div className={styles.gradient}>
          <div className={styles["vid-container"]}>
            <img className={styles.vid} src="/videos/skys.gif" />

            {/* <source
            src="./mylivewallpapers.com-Retro-Skyscrapers.gif"
            type="video/gif"
          /> */}
          </div>
          <div className={styles["content-box"]}>
            <h1 className={styles["heading-text"]}>
              <span className={styles["name"]}>Joshua J Ruvalcaba</span>
              <span className={styles["title"]}>Full Stack Engineer</span>
            </h1>
            <a
              href="#portfolio"
              className={`${styles.btn} ${styles["project-btn"]}`}
            >
              See Projects
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Landing;
