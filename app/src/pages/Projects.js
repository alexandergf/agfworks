import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStyles } from './styles/ProjectsStyles';

import project1 from "../assets/images/dise.jpg";
import wip from '../assets/images/wip.gif'
import BackgroundService from '../services/BackgroundService';
import useProjects from '../hooks/useProjects';

const Projects = () => {
  const projects = useProjects();
  const classes = useStyles();

  BackgroundService.changeBackground('#233');

  const ListItems = () => {
    return(
      
        projects.map((pro, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {pro.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {pro.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))
      
    )
  }


  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justifyContent="center">
        {projects.length > 0 ? <ListItems /> : "Loading..."}      
        <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={wip}
                />
              </CardActionArea>  
              <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Mas proyectos estan por venir!!!
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Se esta trabajando en la integración del resto de los proyectos.
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
    </Box>
  );
}

export default Projects
