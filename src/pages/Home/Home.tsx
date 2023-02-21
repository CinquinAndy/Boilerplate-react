import React from "react";
import Panda from "../../components/Panda/Panda";
import {useTheme} from "@mui/material/styles";

function Home() {
    const theme = useTheme();

    return (
        <div>
            <Panda backgroundColor={theme.palette.info.main}  title={"Home page"} link={"/"}/>
        </div>
    );
}

export default Home
