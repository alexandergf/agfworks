import React, { useEffect, useState } from 'react'
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from './styles/ProjectsStyles';

import project1 from "../assets/images/dise.jpg";
import wip from '../assets/images/wip.gif'
import ProjectsService from '../services/ProjectsService';
import BackgroundService from '../services/BackgroundService';



const Projects = () => {
  const [projects, setProjects] = useState([]);

  const classes = useStyles();

  BackgroundService.changeBackground('#233');

  useEffect(() => {
    ProjectsService.getProjects()
      .then(data => {
        if(data.ok){
            setProjects([...data.resp.projects]);
        }
      })
      .catch(error => {
        setProjects(["No se ha podido recuperar la información"]);
      });
  },[]);

  

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
