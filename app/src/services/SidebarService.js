import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import LaptopChromebook from '@material-ui/icons/LaptopChromebook';

export default class SidebarService {
    static menuItems = [
        { listIcon: <Home />, listText: "Inicio", listPath: "/" },
        { listIcon: <AssignmentInd />, listText: "Experiencia", listPath: "/experiencia" },
        { listIcon: <LaptopChromebook />, listText: "Estudios", listPath: "/estudios" },
        { listIcon: <Apps />, listText: "Proyectos", listPath: "/proyectos" },
        { listIcon: <ContactMail />, listText: "Contacto", listPath: "/contacto" },
      ];

    static getMenuItems = () => {
        return this.menuItems;
    }
}