const api_url = 'http://localhost:3000/email/contact-email';

export default class EmailController {
    static sendEmail = (dataEmail) => {
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
                .then(resp => resolve(resp))
                .catch(error => reject(error))
        });
    }
}