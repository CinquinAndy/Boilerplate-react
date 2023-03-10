import React from 'react';
import {useTheme} from "@mui/material/styles";
import Auth from "../../components/Auth/Auth";

function Authentication() {
    const theme = useTheme();

    return (
        <div>
            {/*<Panda backgroundColor={theme.palette.secondary.main} title={"Authentification page"} link={"/candidates"}/>*/}
            <Auth></Auth>
            {/*<Landing/>*/}
        </div>
    );
}

export default Authentication;
