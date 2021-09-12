import StudiesController from "../controller/StudiesController";


export default class StudiesService {
    
    static getStudies = () => {       
        return new Promise((resolve, reject) => {
            StudiesController.getInfo()
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