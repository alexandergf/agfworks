const api_url = 'http://localhost:3000/studies/';

export default class StudiesController {
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