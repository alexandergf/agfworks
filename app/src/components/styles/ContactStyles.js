import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
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
        marginBottom: "1rem",
        marginTop: "1rem"
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
        marginTop: "1rem",
        color: "white",
        borderColor: "#13808F",
    },
    field: {
        margin: "1rem 0rem",
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