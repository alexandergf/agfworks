import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "#222",
        margin: 0,
      },
      menu: {
        color: "white",
      },
      title: {
        color: lightBlue[100],
        textDecoration: 'none'
      }
}));