import React from "react";
import styles from "./Skills.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const Skills = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Skills</div>
      <div className={styles.content}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Technical Skills" />
          <Tab label="Soft Skills" />
        </Tabs>

        {value == 0 && (
          <div className={styles.tabContent}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <span className={styles.skillText}>React</span>
                <BorderLinearProgress variant="determinate" value={90} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>HTML/CSS</span>
                <BorderLinearProgress variant="determinate" value={60} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Javascript</span>
                <BorderLinearProgress variant="determinate" value={90} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Typescript</span>
                <BorderLinearProgress variant="determinate" value={80} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Data Structures</span>
                <BorderLinearProgress variant="determinate" value={70} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>SQL</span>
                <BorderLinearProgress variant="determinate" value={80} />
              </Grid>
            </Grid>
          </div>
        )}
        {value == 1 && (
          <div className={styles.tabContent}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <span className={styles.skillText}>Goal Oriented</span>
                <BorderLinearProgress variant="determinate" value={80} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Problem Solving</span>
                <BorderLinearProgress variant="determinate" value={70} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Collabotation</span>
                <BorderLinearProgress variant="determinate" value={90} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Empathy</span>
                <BorderLinearProgress variant="determinate" value={90} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Positivity</span>
                <BorderLinearProgress variant="determinate" value={75} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Organization</span>
                <BorderLinearProgress variant="determinate" value={65} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Adaptability</span>
                <BorderLinearProgress variant="determinate" value={85} />
              </Grid>
              <Grid item xs={6}>
                <span className={styles.skillText}>Creativity</span>
                <BorderLinearProgress variant="determinate" value={90} />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
