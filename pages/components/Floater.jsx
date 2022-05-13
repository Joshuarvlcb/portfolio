import React from "react";
import styles from "../../styles/About.module.scss";
import Image from "next/image";
const Floater = () => {
  return (
    <>
      <div className={styles["cube-con"]}>
        <div className={styles["cube"]}>
          <div className={styles["cube__faces"]}>
            <div className={`${styles["cubeface"]} ${styles["cubefront"]}`}>
              <img src="/pictures/jsIcon.png" alt="" />
            </div>
            <div className={`${styles["cubeface"]} ${styles["cubeback"]}`}>
              <img src="/pictures/nodeIcon.png" alt="" />
            </div>
            <div className={`${styles["cubeface"]} ${styles["cubeleft"]}`}>
              <img src="/pictures/reactIcon.png" alt="" />
            </div>
            <div className={`${styles["cubeface"]} ${styles["cuberight"]}`}>
              <img src="/pictures/mongooseIcon.png" alt="" />
            </div>
            <div className={`${styles["cubeface"]} ${styles["cubetop"]}`}></div>
            <div
              className={`${styles["cubeface"]} ${styles["cubebottom"]}`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Floater;
