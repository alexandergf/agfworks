import { makeStyles, withStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles(({
    contactContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    gridContainer: {
        padding: "2rem"
    },
    heading: {
        color: "white",
        textAlign: "left",
        marginBottom: "1rem!important",
        marginTop: "1rem!important"
    },
    form: {
        backgroundColor: "#121212",
        padding: "1rem",
        borderRadius: "20px",
        border: "1px solid white"
    },
    input: {
        color: "#fff",
    },
    button: {
        marginTop: "1rem!important",
        color: "white",
        borderColor: "#13808F",
    },
    field: {
        margin: "1rem 0rem!important",
    },
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "white",
        },
        "& label": {
            color: "white",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white",
            },
            "&:hover fieldset": {
                borderColor: "white",
            },
            "&.Mui-focused fieldset": {
                color: "#fff",
                borderColor: "white",
            },
        },
    },
})(TextField);

export {useStyles, InputField};