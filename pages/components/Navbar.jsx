import React, { useEffect } from "react";
import styles from "../../styles/Navbar.module.scss";
import { useState, useRef } from "react";
const Navbar = ({ navbarRef }) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  let navMenu = useRef();

  return (
    <>
      <div
        onClick={() => {
          /*
      how to make x axis -100% and toogleNavbar to false
      when we click on a tag change toogleNavbar to false
      change style to             navMenu.style.left = -100 + "%";

   
   */
          let state = toggleNavbar;
          setToggleNavbar(!toggleNavbar);
          state = !toggleNavbar;
          if (state) {
            navMenu.style.left = 0 + "%";
            console.log("foo");
          } else {
            console.log("foo");
            navMenu.style.left = -100 + "%";
            setAClicked(false);
          }
        }}
        className={styles.ham}
      >
        <div
          ref={navbarRef}
          className={`${styles["ham-1"]} ${toggleNavbar ? styles["open"] : ""}`}
        ></div>
      </div>
      <ul
        ref={(value) => (navMenu = value)}
        className={`${styles["nav-active"]} ${toggleNavbar ? "" : "none"}`}
      >
        <li className={styles["nav__item"]}>
          <a
            href="#portfolio"
            className={styles["nav__link"]}
            onClick={() => {
              setToggleNavbar(false);
              navMenu.style.left = -100 + "%";
            }}
          >
            Porfolio
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#contact"
            className={styles["nav__link"]}
            onClick={() => {
              setToggleNavbar(false);
              navMenu.style.left = -100 + "%";
            }}
          >
            Contact Me
          </a>
        </li>

        <li className="nav__item">
          <a
            href="#skills"
            className={styles["nav__link"]}
            onClick={() => {
              setToggleNavbar(false);
              navMenu.style.left = -100 + "%";
            }}
          >
            Skills
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
