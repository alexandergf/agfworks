import { makeStyles } from "@mui/styles";
import { lightBlue } from '@mui/material/colors';

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
      select: {
        padding: "0em .7em",
        borderRadius: '20px',
        color: lightBlue[100],
        borderColor: "white",
        border: "1px solid white",
        textDecoration: "none",
        '&:focus': {
          borderRadius: 4,
          borderColor: '#80bdff',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
      },
      toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      left: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      },
      toogleButtons: {
        padding: "0.3rem 0.5rem !important"
      },
      toogleButtonsGroup:{
        backgroundColor: lightBlue[100],
        border: "1px solid black!important"        
      }
}));