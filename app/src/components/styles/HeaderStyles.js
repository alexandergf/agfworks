import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "lightblue",
    },
    subtitle: {
        color: "white",
        textTransform: "uppercase",
    },
    typedContainer: {
        position: "sticky",
        top: "70%",
        left: "50%",
        textAlign: "center",
    },
}));