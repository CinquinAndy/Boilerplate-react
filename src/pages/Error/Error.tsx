import React from 'react';
import {useTheme} from "@mui/material/styles";

function Error() {
    const theme = useTheme();

    return (
        <div>
            {/*<Panda backgroundColor={theme.palette.error.main}  title={"Error page"} link={"/home"}/>*/}
            {/*<Landing/>*/}
        </div>
    );
}

export default Error;
