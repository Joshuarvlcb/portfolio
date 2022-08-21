import React from "react";
import Card from "./Card";
import styles from "../../styles/Project.module.scss";

const Project = ({ projectsPageRef }) => {
  const projects = [
    {
      picture: "/pictures/Snickers.png",
      title: "Ecommerce App",
      description: "This is a full stack application it’s a sneakers ecommerce app I used the MERN stack except instead of React I use the NextJS framework. A user can create an account and it’s saved on my mongo database as well as all the information of the user like shopping cart wishlist.",
      tools: ["react", "scss", "express"],
      isThereAWebsite:false,
      github:"https://github.com/Joshuarvlcb/snickers"

    },
    {
      picture:"/pictures/Musicat.png",
      title: "Spotify Clone",
      description: "This is a Spotify clone I am using node in order to get my token to use spotifys API and I am using React for my client side. The user can create playlists search and listen to any song, playlist and album and they can add songs to their liked songs playlist and custom playlists.",
      tools: ["react", "scss", "express"],
      isThereAWebsite:false,
      github:"https://github.com/Joshuarvlcb/Music-App"
    },
    {
      picture: "/pictures/SortingVisualizer.png",
      title: "Sorting Visualizer",
      description: "This project taught me so much about recursion and Big O notation. You can see how Bubble sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort work. Merge Sort is a very elegant and beautiful algorithm it follows the divide and conquer principles as well as Quick Sort.",
      tools: ["react", "scss", "express"],
      isThereAWebsite:true,
      github:"https://github.com/Joshuarvlcb/sorting-visualizer",
      website:"https://splendorous-unicorn-508a64.netlify.app/"

      

    },
    {
      picture:"/pictures/Popcon.png",
      title: "Netflix Clone",
      description: "This a Netflix clone there is no backend I only used React, Redux for state management, SCSS and MovieDB API. You can search any movie and users can click on a movie to see more information about the movie.",
      tools: ["react", "scss", "express"],
      isThereAWebsite:true,
      github:"https://github.com/Joshuarvlcb/popcon",
      website:"https://fancy-strudel-3dd0df.netlify.app"
    },
  ];
  return (
    <>
      <div ref={projectsPageRef} id="portfolio" className={styles.portfolio}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles["projects-container-center"]}>
          <div className={styles["projects-container"]}>
            {projects.map(({ title, description ,picture,github,website,isThereAWebsite}, i) => {
              return <Card key={i} title={title} description={description} picture = {picture} github={github} website ={website ? website : ""} isThereAWebsite = {isThereAWebsite} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
