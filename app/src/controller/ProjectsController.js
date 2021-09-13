import { BACKEND } from "../consts/backend";
const api_url = BACKEND+'projects/';

export default class ProjectsController {
    static getInfo = () => {
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
                .then(resp => resolve(resp.json()))
                .catch(error => reject(error))
        });
    }
}