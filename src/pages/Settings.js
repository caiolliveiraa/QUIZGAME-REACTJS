import { Box } from "@mui/material"
import SelectField from "../components/SelectField"
import TextFieldComp from "../components/TextFieldComp";

const Settings = () => {

const handleSubmit = (e) => {
    e.preventDefault();
};

    return (
        <form onSubmit={handleSubmit}>
            <SelectField label="Category"/>
            <SelectField label="Difficulty"/>
            <SelectField label="Type"/>
            <TextFieldComp />
            <Box mt={3} width="100%">
                <button fullwidth variant="contained" type="submit">
                    Get Started
                </button>
            </Box>
        </form>
    )
}

export default Settings