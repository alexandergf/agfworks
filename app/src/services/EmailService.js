import EmailController from '../controller/EmailController';
import { modalSuccess, modalError } from '../components/modals/EmailModals';

export default class EmailService {
    
    static enviarMail = (dataEmail) => {
        EmailController.sendEmail(dataEmail)
        .then(resp => {
            if(resp.ok){
                modalSuccess();
            }else{
                modalError();
            }
        })
        .catch(error => modalError())    
    }

}