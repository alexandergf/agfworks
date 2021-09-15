import { useState, useEffect } from 'react';
import ProjectsService from '../services/ProjectsService';

const useProjects = () => {
  const [projects, setProjects] = useState([]);

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

  return projects;
}

export default useProjects;
