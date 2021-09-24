import { BACKEND } from "../consts/backend";
const api_url = BACKEND+'email/contact-email';

export default class EmailService {
    
    static enviarMail = (dataEmail) => {
            let conf = {
                method: "POST",
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Host': 'Host'
                }),
                body: JSON.stringify(dataEmail)
            };
            return new Promise((resolve, reject) => {
            fetch(api_url, conf)
                .then(resp => {
                    resolve(resp.ok);
                })
            .catch(error => reject(error))   
        }); 
    }

}