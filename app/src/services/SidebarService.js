import AssignmentInd from "@mui/icons-material/AssignmentInd";
import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import ContactMail from "@mui/icons-material/ContactMail";
import LaptopChromebook from '@mui/icons-material/LaptopChromebook';

export default class SidebarService {
    static menuItems = [
        { listIcon: <Home />, listText: "Home", listPath: "/" },
        { listIcon: <AssignmentInd />, listText: "Experience", listPath: "/experiencia" },
        { listIcon: <LaptopChromebook />, listText: "Studies", listPath: "/estudios" },
        { listIcon: <Apps />, listText: "Projects", listPath: "/proyectos" },
        { listIcon: <ContactMail />, listText: "Contact", listPath: "/contacto" },
      ];

    static getMenuItems = () => {
        return this.menuItems;
    }
}