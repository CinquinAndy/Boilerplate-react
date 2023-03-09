import React from 'react';
import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ICandidate} from "../../types/ICandidate";

const Candidate = (candidate: ICandidate) => {
    return (
        <Card variant="outlined">
            <React.Fragment>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        {candidate.email}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {candidate.name}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {candidate.phone}
                    </Typography>
                    <Typography variant="body2">
                        {candidate.description}
                    </Typography>
                </CardContent>
            </React.Fragment>
        </Card>
    );
};

export default Candidate;
