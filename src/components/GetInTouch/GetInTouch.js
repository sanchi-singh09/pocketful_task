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
            <p className={styles.subHeading}>Passionate</p>
            <div>
                    <GitHubIcon className={styles.icon}/>
                    <FacebookIcon className={styles.icon}/>
                    <InstagramIcon className={styles.icon}/>
                    <LinkedInIcon className={styles.icon}/>
            </div>
            <span className={styles.moreAboutMe}>More about me</span>
        </div>
    </div>
);
};

export default GetInTouch;
