import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.navContainer}>
            <a href="/" className={styles.logo}>
              MyPortfolio
            </a>
            <ul className={styles.navLinks}>
              <li>
                <a href="#about" className={styles.link}>
                  About
                </a>
              </li>
              <li>
                <a href="https://github.com/sanchi-singh09" className={styles.link}>
                  Projects
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sanchi-singh/" className={styles.link}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1GQf5QV4IkuoudwT-edMvhs9IVcAHsas1/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;