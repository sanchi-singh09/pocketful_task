import React from "react";
import styles from "./Experiences.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import companyLogo from "./kiet.jpeg";

const Experiences = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Experiences</div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={styles.imageContainer}>
              <div>
                <Image src={companyLogo} alt="Company Logo" width={200} />
              </div>

              <div className={styles.text}>Aspiring Software Developer</div>
              <div className={styles.text}>Aug 2023 – May 2025</div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.imageContainer}>
              <div>
                <Image src={companyLogo} alt="Company Logo" width={200} />
              </div>

              <div className={styles.text}>Aspiring Software Developer</div>
              <div className={styles.text}>Aug 2023 – May 2025</div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.imageContainer}>
              <div>
                <Image src={companyLogo} alt="Company Logo" width={200} />
              </div>

              <div className={styles.text}>Aspiring Software Developer</div>
              <div className={styles.text}>Aug 2023 – May 2025</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Experiences;
