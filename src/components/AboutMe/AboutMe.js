import React from "react";
import styles from "./AboutMe.module.css";
import profilePic from "./profile-pic1.jpeg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={profilePic}
          alt="Profile"
          width={250}
          height={250}
          className={styles.profilePic}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.centeredTitle}>About Me</h1>
        <p className={styles.aboutMeText}>
          My name is Sanchi Singh, and I am currently pursuing my Master of Computer Applications (MCA) 
          at KIET Group of Institutions, Ghaziabad.

          I am passionate about giving back to the community and aspire to channel this passion through 
          a career in software engineering. In my free time, I enjoy contributing to open-source projects, 
          reading books, traveling, and exploring new places.
        </p>
        <div className={styles.resumeContainer}>
        <a
            href="https://drive.google.com/file/d/1GQf5QV4IkuoudwT-edMvhs9IVcAHsas1/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.resumeButton}
          >
            Resume
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
