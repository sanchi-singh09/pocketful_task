import React from "react";
import styles from "./AboutMe.module.css";
import profilePic from "./profile-pic.jpg"; // Make sure to replace this with the actual path to your image
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
          My name is Sanchi Singh. I’m persuing post-graduation from KIET Group Of Institutions
          Ghaziabad.
          I'm most passionate
          about giving back to the community, and my goal is to pursue this
          passion within the field of software engineering. In my free time I
          like working on open source projects, I enjoy reading books,
          traveling, and exploring new places.
        </p>
        <div className={styles.resumeContainer}>
          <span className={styles.resumeButton}>Resume</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
