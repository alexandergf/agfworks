import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    bottomNavContainer: {
      background: "#222",
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