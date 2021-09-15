import { useState, useEffect } from 'react'
import ExperienceService from "../services/ExperienceService";

const useExperience = () => {
    const [experience,setExperience] = useState([]);

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

    return experience;
}

export default useExperience;