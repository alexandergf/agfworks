import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles } from './styles/StudiesStyles';
import BackgroundService from '../services/BackgroundService';
import useStudies from '../hooks/useStudies';

const Studies = () => {
    const studies = useStudies();
    const classes = useStyles();

    BackgroundService.changeBackground('#233');

    const ListItems = () => {
        return(
            <Box component="div" className={classes.timeLine}>
            {studies.map((stu) => (
              <>
                <Typography
                  variant="h2"
                  className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                  {stu.year}
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    {stu.title}
                  </Typography>
                  <Typography variant="body1" align="center" className={classes.body1}>
                    {stu.subtitle}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.subtitle1}
                  >
                    {stu.body}
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
            Estudios
        </Typography>
        {studies.length > 0 ? <ListItems /> : "Loading..."}
        <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} ${classes.timeLineItemNow}`}
          >
            Actualidad
          </Typography>
      </Box>
    )
}

export default Studies
