import React from "react";
import styles from "./Leadership.module.css";
import { Grid } from "@mui/material";
import img1 from "./img1.png";
import Image from "next/image";

const Leadership = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Leadership</div>
      <div className={styles.text}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div>
              As a software developer with a strong foundation in React JS, JavaScript, HTML, CSS, Java, C++,
              and Data Structures and Algorithms (DSA), I bring a passion for learning and a commitment to delivering
              high-quality software solutions. I have developed and contributed to various projects, honing my ability to write clean, efficient code and solve complex technical problems.

              I am eager to leverage my technical skills to build innovative applications,
              optimize user experiences, and implement best practices in development.
              With a keen eye for detail and a strong understanding of front-end technologies,
              I am excited to contribute to projects that prioritize performance and scalability.

              As a collaborative team player, I value effective communication, feedback, and mentorship,
              always striving to learn from peers and share knowledge. My goal is to continue growing as a
              developer, contribute to impactful projects, and work in a dynamic, team-oriented environment
              where I can further develop my skills and knowledge in software development.
            </div>
          </Grid>
          <Grid item xs={6}>
            <Image src={img1} alt="Company Logo" width={700} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Leadership;
