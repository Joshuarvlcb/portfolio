import React from "react";
import styles from "../../styles/Skills.module.scss";
const Skills = () => {
  return (
    <div>
      <div className={styles["skills-container"]}>
        <div className={styles["skills-title"]} id="skills">
          My Skills
        </div>
        <div className={styles["background"]}></div>
        <div
          className={`${styles["skills"]} ${styles["container"]}`}
          id="skiils"
        >
          <div className={`${"row"} ${styles["skills-content"]}`}>
            <div className="col-lg-6">
              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["html"]}`}
                    style={{ width: "100%" }}
                  >
                    <span className={styles["skill"]} />
                    <div className={styles["html-width"]}>html</div>
                  </div>
                </div>
              </div>

              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["css"]}`}
                    style={{ width: "100%" }}
                  >
                    <span className={styles["skill"]} />
                    <div className={styles["css-width"]}>css</div>
                  </div>
                </div>
              </div>

              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["js"]}`}
                    style={{ width: "100%" }}
                  >
                    <span className={styles["skill"]} />
                    <div className={styles["js-width"]}>js</div>
                  </div>
                </div>
              </div>

              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]}`}
                    style={{
                      width: "100%",
                      backgroundColor: " rgb(49, 209, 102)",
                    }}
                  >
                    <span className={styles["skill"]} />
                    <div
                      className={styles["node"]}
                      style={{ backgroundColor: "rgb(20, 148, 52) " }}
                    >
                      Node
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["bootstrap"]}`}
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(136, 210, 235)",
                    }}
                  >
                    <span className={styles["skill"]}>
                      <div
                        className={styles["bootstrap-width"]}
                        style={{ backgroundColor: "rgb(90, 184, 216)" }}
                      >
                        react
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["bootstrap"]}`}
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(92, 175, 202)",
                    }}
                  >
                    <span className={styles["skill"]}>
                      <div
                        style={{ backgroundColor: "rgb(44, 116, 158)" }}
                        className={styles["bootstrap-width"]}
                      >
                        typescript
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              {/* <!-- <div className="progress"> -->
          <!-- <div className="progress-bar-wrap"> -->
            <!-- <!-- <div className="progress-bar bootstrap" style="width: 100%; background-color: #8993be "> --> -->
              <!-- <span className="skill"> -->
                <!-- <!-- <div className="bootstrap-width" style="background-color:#232531">php</div> --> -->
              <!-- </span> -->
            <!-- </div> -->
          <!-- </div> -->
        <!-- </div> --> */}
            </div>
            <div className="col-lg-6">
              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["sass"]}`}
                    style={{ width: "100%" }}
                  >
                    <span className={styles["skill"]} />
                    <div className={styles["sass-width"]}>sass</div>
                  </div>
                </div>
              </div>

              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["jquery"]}`}
                    style={{ width: "100%" }}
                  >
                    <span className={styles["skill"]} />
                    <div className={styles["jquery-width"]}>jQuery</div>
                  </div>
                </div>
              </div>

              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["bootstrap"]}`}
                    style={{ width: "100%" }}
                  >
                    <span className={styles["skill"]}>
                      <div className={styles["bootstrap-width"]}>bootstrap</div>
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["bootstrap"]}`}
                    style={{
                      width: "100%",
                      backgroundColor: " rgb(89, 156, 75)",
                    }}
                  >
                    <span className={styles["skill"]}>
                      <div
                        className={styles["bootstrap-width"]}
                        style={{
                          backgroundColor: "rgb(56, 105, 65)",
                        }}
                      >
                        mongodb
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]}`}
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(187, 121, 231)",
                    }}
                  >
                    <span className={styles["skill"]}>
                      <div
                        style={{
                          backgroundColor: "rgb(138, 55, 194)",
                        }}
                        className={styles["bootstrap-width"]}
                      >
                        redux
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles["progress"]}>
                <div className={styles["progress-bar-wrap"]}>
                  <div
                    className={`${styles["progress-bar"]} ${styles["bootstrap"]}`}
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(196, 196, 196)",
                    }}
                  >
                    <span className={styles["skill"]}>
                      <div
                        className={styles["bootstrap-width"]}
                        style={{
                          backgroundColor: "rgb(110, 112, 112)",
                        }}
                      >
                        express
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["progress"]}>
            <div className={styles["progress-bar-wrap"]}>
              <div
                className={`${styles["progress-bar"]} ${styles["bootstrap"]}`}
                style={{
                  width: "100%",
                  backgroundColor: "rgb(236, 125, 125) ",
                }}
              >
                <span className={styles["skill"]}>
                  <div
                    className={styles["bootstrap-width"]}
                    style={{
                      backgroundColor: "rgb(161, 66, 66)",
                    }}
                  >
                    mongoose
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
