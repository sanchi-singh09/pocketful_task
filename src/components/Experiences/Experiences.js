import React from "react";
import styles from "./Experiences.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import companyLogo1 from "./kiet.jpeg";
import companyLogo2 from "./bcalogo.jpeg";
import companyLogo3 from "./rhpslogo.jpeg";

const Experiences = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Experiences</div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={styles.imageContainer}>
              <div>
                <Image src={companyLogo1} alt="Company Logo1" width={200} />
              </div>

              <div className={styles.text}>Aspiring Software Developer</div>
              <div className={styles.text}>Aug 2023 – May 2025</div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.imageContainer}>
              <div>
                <Image src={companyLogo2} alt="Company Logo2" width={200} />
              </div>

              <div className={styles.text}>Aspiring Software Developer</div>
              <div className={styles.text}>Aug 2020 – May 2023</div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.imageContainer}>
              <div>
                <Image src={companyLogo3} alt="Company Logo3" width={200} />
              </div>

              <div className={styles.text}>Aspiring Software Developer</div>
              <div className={styles.text}>Aug 2018 – May 2020</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Experiences;
