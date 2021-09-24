import { BACKEND } from "../consts/backend";
const api_url = BACKEND+'projects/';
export default class ProjectsService {
    
    static getProjects = () => {     
        let conf = {
            method: "GET",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Host': 'Host'
            })
        };  
        return new Promise((resolve, reject) => {
            fetch(api_url, conf)
                .then(resp => resp.json())
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