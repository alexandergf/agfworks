import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    bottomNavContainer: {
      background: "#222!important",
    },
    root: {
      "& .MuiSvgIcon-root": {
        fill: "white",
        "&:hover": {
          fill: "white",
          fontSize: "1.8rem",
        },
      },
    },
  });