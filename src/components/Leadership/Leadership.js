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
              As a React developer with leadership experience, I bring technical
              expertise, project management skills, and strong communication
              abilities to the table. I have a proven track record of building
              large-scale applications, optimizing code for performance, and
              implementing best practices. Additionally, I have experience
              leading teams and projects, creating and maintaining project
              plans, managing timelines and budgets, and ensuring timely
              delivery of high-quality work. I excel at communicating
              effectively with team members, stakeholders, and clients, both
              verbally and in writing, and am a skilled listener who can provide
              clear and constructive feedback. I am also passionate about
              mentoring and training other developers to help them develop their
              skills and achieve their goals. With my ability to solve complex
              technical problems and think creatively, I am always up-to-date
              with the latest developments in React and related technologies,
              and am able to innovate and inspire a positive, collaborative work
              environment.
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
