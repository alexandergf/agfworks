import ProjectsController from "../controller/ProjectsController";

export default class ProjectsService {
    
    static getProjects = () => {       
        return new Promise((resolve, reject) => {
            ProjectsController.getInfo()
            .then(resp => {
                resolve({
                    "ok": true,
                    resp
                });
            })
            .catch(error => {
                reject ({
                    "ok": false, 
                    error
                })
            });
        });

    }

}