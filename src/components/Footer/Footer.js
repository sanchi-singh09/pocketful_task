import React from "react";
import styles from "./Footer.module.css";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReactIcon from "./react-brands-solid.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Get In Touch</div>
      <div className={styles.content}>
        <div>
          I'm currently looking for full-time React Developer/Frontend Developer
          opportunities! If you know of any positions available, if you have any
          questions, or if you just want to say hi, please feel free to email me
          at, <span className={styles.email}>ridham.garg45@gmail.com</span>.
        </div>
        <div className={styles.end}>
          <CodeOffIcon className={styles.icon} /> with{" "}
          <FavoriteIcon className={styles.icon} /> by{" "}
          <span className={styles.name}>Ridham Garg</span> using{" "}
          <Image src={ReactIcon} alt="React Icon" className={styles.reactImg} width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
