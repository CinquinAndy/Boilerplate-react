import React from 'react';
import Panda from "../../components/Panda/Panda";
import {useTheme} from "@mui/material/styles";

function Authentication() {
    const theme = useTheme();

    return (
        <div>
            <Panda backgroundColor={theme.palette.secondary.main} title={"Authentification page"} link={"/candidates"}/>
        </div>
    );
}

export default Authentication;
