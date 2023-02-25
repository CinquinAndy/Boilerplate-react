import React, {useEffect} from "react";
import Panda from "../../components/Panda/Panda";
import {useTheme} from "@mui/material/styles";
import {AuthProvider, useAuth} from "../../routes/AuthProvider";
import {useNavigate} from "react-router-dom";

function Home() {
    const theme = useTheme();
    return (
        <div>
            <Panda backgroundColor={theme.palette.info.main} title={"Home page"} link={"/"}/>
        </div>
    );
}

export default Home

