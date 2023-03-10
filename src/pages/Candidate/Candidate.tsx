import React, {useEffect, useState} from 'react';
import {useTheme} from "@mui/material/styles";

import {PocketFetchCandidate, PocketPatchCandidate} from "../../api/PocketBase";
import {Box, Button, Card, Grid} from '@mui/material';
import {useMutation, useQuery} from "react-query";
import {_KEY_candidates} from "../../stores/ReactQuery_Keys";
import CandidateList from "../../components/CandidateList/CandidateList";
import {ICandidate} from "../../types/ICandidate";

function Candidate() {
    const theme = useTheme();

    const mutationCandidate = useMutation(_KEY_candidates, (newCandidate: ICandidate) => PocketPatchCandidate(newCandidate.id, {
        id: newCandidate.id,
        name: newCandidate.name + "~",
        email: newCandidate.email,
        phone: newCandidate.phone,
        description: newCandidate.description
    } as ICandidate));

    const {
        isLoading,
        data: candidates,
        isError,
        error
    } = useQuery<Record<any, any>[], Error>(
        _KEY_candidates,
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
                <Grid sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 2,
                    p: 10
                }}>
                    {candidates?.map((candidate: any) => (
                        <Box sx={{minWidth: 275, maxWidth: 350}} key={candidate.id}>
                            {CandidateList({
                                id: candidate.id,
                                name: candidate.name,
                                email: candidate.email,
                                phone: candidate.phone,
                                description: candidate.description
                            })}
                        </Box>
                    ))}
                </Grid>
                <Grid sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 2,
                    p: 10
                }}>
                    {candidates?.map((candidate: any) => (
                        <Button key={candidate.id} variant="contained" onClick={
                            () => {
                                mutationCandidate.mutate(candidate);
                            }
                        }
                        >{candidate.name} - id : {candidate.id}</Button>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Candidate;
