import { useState, useEffect } from 'react'
import StudiesService from '../services/StudiesService';

const useStudies = () => {
    const [studies, setStudies] = useState([]);

    useEffect(() => {
        StudiesService.getStudies()
          .then(data => {
            if(data.ok){
                setStudies([...data.resp.studies]);
            }
          })
          .catch(error => {
            setStudies(["No se ha podido recuperar la información"]);
          });
        
    },[]);

    return studies;
}

export default useStudies
