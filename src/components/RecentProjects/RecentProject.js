import React from "react";
import styles from "./RecentProjects.module.css";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const RecentProject = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Recent Projects</div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className={styles.card}>
            <div>myportfolio</div>
            <div className={styles.buttonsContainer}>
              <span className={styles.buttonContainer}>
                <a
                  href="https://github.com/user/myportfolio.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={styles.icon} />
                  Clone Project
                </a>
              </span>
              <span className={styles.buttonContainer}>
                <a
                  href="https://github.com/user/myportfolio" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={styles.icon} />
                  Repo
                </a>
              </span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.languages}>
              <span>Languages: </span>
              <span className={styles.language}>Javascript: 51.5 %</span>
              <span className={styles.language}>SCSS: 45.3 %</span>
              <span className={styles.language}>HTML: 3 %</span>
            </div>
            <div className={styles.foot}>
              <span>
                {" "}
                <GitHubIcon className={styles.icon} />
                Stars
              </span>
              <span className={styles.published}>
                Updated on January 17, 2024
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.card}>
            <div>budget_tracker</div>
            <div className={styles.buttonsContainer}>
              <span className={styles.buttonContainer}>
                <a
                  href="https://github.com/user/myportfolio.git" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={styles.icon} />
                  Clone Project
                </a>
              </span>
              <span className={styles.buttonContainer}>
                <a
                  href="https://github.com/user/myportfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={styles.icon} />
                  Repo
                </a>
              </span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.languages}>
              <span>Languages: </span>
              <span className={styles.language}>Javascript: 51.5 %</span>
              <span className={styles.language}>SCSS: 45.3 %</span>
              <span className={styles.language}>HTML: 3 %</span>
            </div>
            <div className={styles.foot}>
              <span>
                {" "}
                <GitHubIcon className={styles.icon} />
                Stars
              </span>
              <span className={styles.published}>
                Updated on January 17, 2024
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.card}>
            <div>task_management</div>
            <div className={styles.buttonsContainer}>
              <span className={styles.buttonContainer}>
                <a
                  href="https://github.com/user/myportfolio.git" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={styles.icon} />
                  Clone Project
                </a>
              </span>
              <span className={styles.buttonContainer}>
                <a
                  href="https://github.com/user/myportfolio" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={styles.icon} />
                  Repo
                </a>
              </span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.languages}>
              <span>Languages: </span>
              <span className={styles.language}>Javascript: 51.5 %</span>
              <span className={styles.language}>SCSS: 45.3 %</span>
              <span className={styles.language}>HTML: 3 %</span>
            </div>
            <div className={styles.foot}>
              <span>
                {" "}
                <GitHubIcon className={styles.icon} />
                Stars
              </span>
              <span className={styles.published}>
                Updated on January 17, 2024
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.card}>
            <div>aligarh_diary</div>
            <div className={styles.buttonsContainer}>
              <span className={styles.buttonContainer}>
                <a
                  href="https://github.com/user/myportfolio.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={styles.icon} />
                  Clone Project
                </a>
              </span>
              <span className={styles.buttonContainer}>
                <a
                  href="https://github.com/user/myportfolio" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={styles.icon} />
                  Repo
                </a>
              </span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.languages}>
              <span>Languages: </span>
              <span className={styles.language}>Javascript: 51.5 %</span>
              <span className={styles.language}>SCSS: 45.3 %</span>
              <span className={styles.language}>HTML: 3 %</span>
            </div>
            <div className={styles.foot}>
              <span>
                {" "}
                <GitHubIcon className={styles.icon} />
                Stars
              </span>
              <span className={styles.published}>
                Updated on January 17, 2024
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecentProject;
