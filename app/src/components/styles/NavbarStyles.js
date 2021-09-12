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
      },
      menuSliderContainer: {
        width: 250,
        background: "#DB7C32",
        height: "100%",
      },
      avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
      },
      listItem: {
        color: "white",
      },
      divider: {
        backgroundColor: 'white'
      }
}));