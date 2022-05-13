import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landing";
import PortfolioGallery from "./components/Project";
import SkillsPage from "./components/Skills";
import AboutmePage from "./components/Aboutme";
import ContactPage from "./components/Contact";

export default function Home() {
  const projectsPage = useRef();
  const navbar = useRef();
  const aboutPage = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let state = 0;
      if (projectsPage) {
        let coards = projectsPage.current.getBoundingClientRect();
        state = coards.bottom;
        if (coards.top <= 50 && coards.bottom > 50) {
          //change color of burger
          navbar.current.style.backgroundColor = "rgb(0, 95, 184)";
        } else navbar.current.style.backgroundColor = "white";
      }

      if (aboutPage && state < 0) {
        let coards = aboutPage.current.getBoundingClientRect();
        if (coards.top <= 50 && coards.bottom > 50) {
          //change color of burger
          navbar.current.style.backgroundColor = "rgb(0, 95, 184)";
        } else navbar.current.style.backgroundColor = "white";
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Joshuarvlcb</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="../public/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
          rel="stylesheet"
        />
        
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        />
        <script
          async
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          async
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <Navbar navbarRef={navbar} />
      <LandingPage />
      <PortfolioGallery projectsPageRef={projectsPage} />
      <SkillsPage />
      <AboutmePage aboutPageRef={aboutPage} />
      <ContactPage />
    </>
  );
}
