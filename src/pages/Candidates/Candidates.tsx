import React from 'react';
import Panda from "../../components/Panda/Panda";
import {useTheme} from "@mui/material/styles";

function Candidates() {
    const theme = useTheme();

    return (
        <div>
            <Panda backgroundColor={theme.palette.success.main}  title={"Candidates page"} link={"/pouet"}/>
        </div>
    );
}

export default Candidates;
