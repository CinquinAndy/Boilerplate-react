import React, {useEffect} from "react";
import {useTheme} from "@mui/material/styles";

function Home() {
    const theme = useTheme();
    return (
        <div>
            {/*<Panda backgroundColor={theme.palette.info.main} title={"Home page"} link={"/"}/>*/}
        </div>
    );
}

export default Home

