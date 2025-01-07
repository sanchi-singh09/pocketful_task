import React from "react";
import styles from "./GetInTouch.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const GetInTouch = () => {
    return (
        <div className={styles.container}>
          <div className={styles.centeredDiv}>
            <h1 className={styles.name}>Sanchi Singh</h1>
            <p className={styles.subHeading}>
              Passionate about changing the world with technology.
            </p>
            <div className={styles.socialMediaContainer}>
              <a
                href="https://github.com/sanchi-singh09"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <GitHubIcon className={styles.icon} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <FacebookIcon className={styles.icon} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <InstagramIcon className={styles.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanchi-singh/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <LinkedInIcon className={styles.icon} />
              </a>
            </div>
            <a href="#about" className={styles.moreAboutMe}>
              More about me
            </a>
          </div>
        </div>
      );
    };

export default GetInTouch;
