import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles } from './styles/ExperienceStyles';
import BackgroundService from "../services/BackgroundService";
import useExperience from "../hooks/useExperience";

const Experience = () => {
    const experience = useExperience();
    const classes = useStyles();

    BackgroundService.changeBackground('#233');

    const ListItems = () => {           
      return (
          <Box component="div" className={classes.timeLine}>
            {experience.map((exp) => (
              <>
                <Typography
                  variant="h2"
                  className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                  {exp.year}
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    {exp.title}
                  </Typography>
                  <Typography variant="body1" align="center" className={classes.body1}>
                    {exp.subtitle}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.subtitle1}
                  >
                    {exp.body}
                  </Typography>
                </Box>
              </>
            ))}
            </Box>
      )
    }

    return (
      <Box component="header" className={classes.mainContainer}>
          <Typography variant="h4" align="center" className={classes.heading}>
            Experiencia Laboral
          </Typography>
          {experience.length > 0 ? <ListItems /> : "Loading..."}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} ${classes.timeLineItemNow}`}
          >
            Actualidad
          </Typography>
      </Box>
    )
}

export default Experience
