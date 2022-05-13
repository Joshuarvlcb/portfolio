import React from "react";
import Card from "./Card";
import styles from "../../styles/Project.module.scss";
const Project = ({ projectsPageRef }) => {
  const projects = [
    {
      picture: "",
      title: "Musicat",
      description: "lorem loewm",
      tools: ["react", "scss", "express"],
    },
    {
      picture: "",
      title: "Musicat",
      description: "lorem loewm",
      tools: ["react", "scss", "express"],
    },
    {
      picture: "",
      title: "Musicat",
      description: "lorem loewm",
      tools: ["react", "scss", "express"],
    },
    {
      picture: "",
      title: "Musicat",
      description: "lorem loewm",
      tools: ["react", "scss", "express"],
    },
    {
      picture: "",
      title: "Musicat",
      description: "lorem loewm",
      tools: ["react", "scss", "express"],
    },
  ];
  return (
    <>
      <div ref={projectsPageRef} id="portfolio" className={styles.portfolio}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles["projects-container-center"]}>
          <div className={styles["projects-container"]}>
            {projects.map(({ title, description }, i) => {
              return <Card key={i} title={title} description={description} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
