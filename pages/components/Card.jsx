import React from "react";
import styles from "../../styles/Project.module.scss";
const Card = ({ picture, title, description, website,github,isThereAWebsite }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={`${styles["front-card"]} ${styles["card_side"]}`}>
          <div className={styles["card-header"]}>
            <img src={picture} alt="picture of project" />
          </div>
          <div className={styles["heading-text"]}>
            <h3 className="quiz-text">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className={`${styles["back-card"]} ${styles["card_side"]}`}>
        {isThereAWebsite ? <><div className={styles.button}>
            <a href={website}rel="noreferrer" target="_blank">
              View Website
            </a>
          </div>
          <div className={styles.button}>
            <a
              className={styles.code}
              href={github}rel="noreferrer"
              target="_blank"
            >
              View Code
            </a>
          </div></> : <>
          <div className={styles.button}>
            <a
              className={styles.code}
              href={github}rel="noreferrer"
              target="_blank"
            >
              View Code
            </a>
          </div>
          </>}
          
        </div>
      </div>
    </>
  );
};

export default Card;
