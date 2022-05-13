import React, { useState, useRef } from "react";
import Footer from "./Footer";
import styles from "../../styles/Contact.module.scss";
import axios from "axios";
const Contact = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();
  return (
    <>
      <div className={styles["contact"]}>
        <h1 id="contact" className={styles["contact__title"]}>
          Contact Me
        </h1>
        <div className={styles["contact-con"]}>
          <div className={styles["contact-con__info"]}>
            <h3 className={styles["contact-con__info__title"]}>
              Contact Information
            </h3>
            <p className={styles["contact-con__info__para"]}>
              Fill up the form and I will get back to you within 24 hours.
            </p>

            <ul className={styles["contact-con__info__info"]}>
              <div className={styles["contact-con__info__info__list"]}>
                <ion-icon
                  style={{ fontSize: "34px", marginRight: "20px" }}
                  name="call-outline"
                  className={styles.phone}
                ></ion-icon>
                <li>623-826-1311</li>
              </div>
              <div className={styles["contact-con__info__info__list"]}>
                <ion-icon
                  style={{ fontSize: "34px", marginRight: "20px" }}
                  name="mail-outline"
                  className={styles["email"]}
                ></ion-icon>
                <li>joshuarvlcb@gmail.com</li>
              </div>
              <div className={styles["contact-con__info__info__list"]}>
                <ion-icon
                  style={{ fontSize: "34px", marginRight: "20px" }}
                  name="location-outline"
                  className={styles["location"]}
                ></ion-icon>
                <li>Phoenix, Arizona</li>
              </div>
            </ul>
          </div>
          <div className={styles["contact-con__form"]}>
            <div className={styles["contact-con__form__actual"]}></div>

            <div className={`row ${styles["input-boxes"]}`}>
              <div className={`${styles["i"]}  col-lg-6`}>
                <input
                  ref={firstName}
                  type="text"
                  className={styles["contact-con__form__input"]}
                />
                <div className={styles["underline"]}></div>

                <label>first name</label>
              </div>
              <div className={`${styles["i"]}  col-lg-6`}>
                <input
                  ref={lastName}
                  type="text"
                  className={styles["contact-con__form__input"]}
                />
                <div className={styles["underline"]}></div>

                <label>last name</label>
              </div>
            </div>
            <div className={`row ${styles["input-boxes"]} ${styles["last"]}`}>
              <div className={`${styles["i"]}  col-lg-6`}>
                <input
                  ref={email}
                  type="text"
                  className={styles["contact-con__form__input"]}
                />
                <div className={styles["underline"]}></div>
                <label>email</label>
              </div>
              <div className={`${styles["i"]}  col-lg-6`}>
                <input
                  ref={phone}
                  type="text"
                  className={styles["contact-con__form__input"]}
                />
                <div className={styles["underline"]}></div>

                <label>phone</label>
              </div>
            </div>

            <div className={`${styles["m"]}  col-12`}>
              <input
                ref={message}
                type="text"
                className={`${styles["contact-con__form__input"]} ${styles["message"]}`}
              />
              <div className={styles["underline"]}></div>
              <label>Message</label>
            </div>

            <button
              className={styles["contact-con__form__button"]}
              onClick={async (_) => {
                let formData = new FormData();
                formData.append("firstName", firstName.current.value);
                formData.append("lastName", lastName.current.value);
                formData.append("email", email.current.value);
                formData.append("phone", phone.current.value);
                formData.append("message", message.current.value);
                firstName.current.value = "";
                lastName.current.value = "";
                email.current.value = "";
                phone.current.value = "";
                message.current.value = "";
                const result = await axios.post(
                  "https://joshuarvlcb.com/api/sendEmail",
                  formData,
                  {
                    headers: { "Content-Type": "multipart/form-data" },
                  }
                );
                console.log(result);
              }}
            >
              submit
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
