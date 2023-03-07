import React, {useEffect, useState} from 'react';
import {useTheme} from "@mui/material/styles";

import {PocketFetchCandidate} from "../../api/PocketBase";
// import {useQueryClient} from "react-query";
import {Box, Card, CardContent, Grid} from '@mui/material';
import Typography from "@mui/material/Typography";
import {ICandidate} from "../../types/ICandidate";
import {useQuery} from "react-query";
import {ICandidateList} from "../../types/ICandidateList";

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

const _KEY = "candidates";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJfcGJfdXNlcnNfYXV0aF8iLCJleHAiOjE2NzgyOTE0MjIsImlkIjoidHlwZ3Z6YmllbXFlNW4wIiwidHlwZSI6ImF1dGhSZWNvcmQifQ.ZoDew0k88qkGjJ2b1myfbmW41LZropKqQ8dLCho-vQY";

function Candidates() {
    const theme = useTheme();

    // const {
    //     isLoading,
    //     data: candidates,
    //     isError,
    //     error
    // } = useQuery<ICandidate, Error>(
    //     _KEY,
    //     () => fetch('http://arhi-api.beta.andy-cinquin.fr/api/collections/candidate/records', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'authorization': 'Bearer ' + token
    //             },
    //         }
    //     ).then(res => {
    //         if (!res.ok) {
    //             throw new Error('Network response failed')
    //         }
    //         // display data fetched from an API
    //         return res.json()
    //     }));

    const {
        isLoading,
        data: candidates,
        isError,
        error
    } = useQuery<Record<any, any>[], Error>(
        _KEY,
        () => PocketFetchCandidate()
        .then(res => {
            if (!res) {
                throw new Error('Network response failed')
            }
            // display data fetched from an API
            return res
        }));

    useEffect(() => {
        console.log("candidates:", candidates);
    }, [candidates]);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error: {error?.message}</span>;
    }

    if (!Array.isArray(candidates)) {
        return <span>Error: Candidates data is not an array</span>;
    }

    return (
        <div>
            {/*<Panda backgroundColor={theme.palette.success.main} title={"Candidates page"} link={"/pouet"}/>*/}
            {/* check if query have data property */}
            <div>
                {(
                    // @ts-ignore
                    // Galery
                    <Grid sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 2,
                        p: 10
                    }}>
                        {candidates?.map((candidate: any) => (
                            // <div key={candidate.id}>
                            //     <div>
                            //         ah
                            //     </div>
                            // </div>
                            <Box sx={{minWidth: 275, maxWidth: 350}} key={candidate.id}>
                                <Card variant="outlined">{card({
                                    id: candidate.id,
                                    name: candidate.name,
                                    email: candidate.email,
                                    phone: candidate.description,
                                    description: candidate.phone
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
