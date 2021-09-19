import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
export const useStyles = makeStyles(() => ({
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
        color: "white!important",
      },
      divider: {
        backgroundColor: 'white'
      }
}));