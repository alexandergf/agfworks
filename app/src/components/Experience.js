import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStyles } from './styles/ExperienceStyles';
import ExperienceService from "../services/ExperienceService";
import BackgroundService from "../services/BackgroundService";

const Experience = () => {
    const [experience,setExperience] = useState([]);

    const classes = useStyles();

    BackgroundService.changeBackground('#233');

    useEffect(() => {
      ExperienceService.getExperience()
        .then(data => {
          if(data.ok){
            setExperience([...data.resp.experience]);
          }
        })
        .catch(error => {
          setExperience(["No se ha podido recuperar la información"]);
        });
      
    },[]);

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
