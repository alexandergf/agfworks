import ExperienceController from "../controller/ExperienceController";

export default class ExperienceService {
    
    static getExperience = () => {       
        return new Promise((resolve, reject) => {
            ExperienceController.getInfo()
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