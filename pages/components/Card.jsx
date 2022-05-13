import React from "react";
import styles from "../../styles/Project.module.scss";
const Card = ({ picture, title, description, tools }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={`${styles["front-card"]} ${styles["card_side"]}`}>
          <div className="card-header quiz"></div>
          <div className="heading-text quiz">
            <h3 className="quiz-text">{title}</h3>
            <h4>{description}</h4>
          </div>
          <div className={styles["tools-container"]}>
            <div className="quiz html">html</div>
            <div className="quiz css">css/sass</div>
            <div className="quiz js">js</div>
          </div>
        </div>
        <div className={`${styles["back-card"]} ${styles["card_side"]}`}>
          <div className={styles.button}>
            <a href="https://joshuarvlcb.github.io/quiz--app/"rel="noreferrer" target="_blank">
              View Website
            </a>
          </div>
          <div className={styles.button}>
            <a
              className={styles.code}
              href="https://github.com/Joshuarvlcb/quiz--app"rel="noreferrer"
              target="_blank"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
