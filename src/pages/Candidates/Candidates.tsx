import React, {useEffect, useState} from 'react';
import {useTheme} from "@mui/material/styles";

import {PocketFetchCandidate} from "../../api/PocketBase";
// import {useQueryClient} from "react-query";
import {Box, Card, CardContent, Grid} from '@mui/material';
import Typography from "@mui/material/Typography";
import {ICandidate} from "../../types/ICandidate";

const card = (candidate: ICandidate) => {
    return (
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
    )
};

function Candidates() {

    const theme = useTheme();

    // Access the client
    // const queryClient = useQueryClient()
    const fetchCandidates = () => {
        return PocketFetchCandidate().then();
    }

    // Queries
    // const query = useQuery('candidates', PocketFetchCandidate)
    const [query, setQuery] = useState([]);

    // // Fetch candidates
    useEffect(() => {
        console.log("Fetching candidates...")
        fetchCandidates().then((request) => {
            setQuery(request as any);
            console.log(query)
        });
    }, []);

    return (
        <div>
            {/*<Panda backgroundColor={theme.palette.success.main} title={"Candidates page"} link={"/pouet"}/>*/}
            {/* check if query have data property */}
            <div>
                {(!query) ? (
                    <div>Loading...</div>
                ) : (
                    // Galery
                    <Grid sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 2,
                        p:10
                    }}>
                        {query?.map((candidate :any) => (
                            // <div key={candidate.id}>
                            //     <div>
                            //         ah
                            //     </div>
                            // </div>
                            <Box sx={{minWidth: 275, maxWidth:350}} key={candidate.id}>
                                <Card variant="outlined">{card({
                                    id: candidate.id,
                                    name: candidate.name,
                                    email: candidate.email,
                                    phone: candidate.phone,
                                    description: candidate.description
                                })}
                                </Card>
                            </Box>
                        ))}
                    </Grid>
                )}
            </div>
        </div>
    );
}

export default Candidates;
