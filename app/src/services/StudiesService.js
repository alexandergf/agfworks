import { BACKEND } from "../consts/backend";
const api_url = BACKEND+'studies/';

export default class StudiesService {
    
    static getStudies = () => {       
        return new Promise((resolve, reject) => {
            let conf = {
                method: "GET",
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Host': 'Host'
                })
            };
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