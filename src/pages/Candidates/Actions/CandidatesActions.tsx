import React, {useEffect, useState} from 'react';
import {useTheme} from "@mui/material/styles";

import {PocketFetchCandidate, PocketPatchCandidate} from "../../../api/PocketBase";
import {Box, Button, Card, Container, Grid} from '@mui/material';
import {useMutation, useQuery, useQueryClient} from "react-query";
import {_KEY_candidates} from "../../../stores/ReactQuery_Keys";
import {ICandidate} from "../../../types/ICandidate";


const pocketNewCandidate = (newCandidate: ICandidate) => PocketPatchCandidate(newCandidate.id, {
    id: newCandidate.id,
    name: newCandidate.name + "+",
    email: newCandidate.email,
    phone: newCandidate.phone,
    description: newCandidate.description
} as ICandidate)

const pocketResetCandidate = (newCandidate: ICandidate) => PocketPatchCandidate(newCandidate.id, {
    id: newCandidate.id,
    name: newCandidate.name.replaceAll("+", ""),
    email: newCandidate.email,
    phone: newCandidate.phone,
    description: newCandidate.description
} as ICandidate)

function CandidatesActions() {
    const queryClient = useQueryClient();
    const theme = useTheme();

    const invalidateQuery = (queryKey: string) => {
        queryClient.invalidateQueries({queryKey: [queryKey]});
    }

    const mutationCandidate = useMutation(_KEY_candidates, {
        mutationFn: pocketNewCandidate,
        onSuccess: () => invalidateQuery(_KEY_candidates),
    });

    const mutationCandidateReset = useMutation(_KEY_candidates, {
        mutationFn: pocketResetCandidate,
        onSuccess: () => invalidateQuery(_KEY_candidates),
    });


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
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }}>
                            <Button key={candidate.id} variant="contained"
                                    onClick={
                                        () => {
                                            mutationCandidate.mutate(candidate);
                                        }
                                    }
                            >
                                {candidate.name} - id
                            </Button>
                            <Button key={candidate.id} variant="outlined"
                                    onClick={
                                        () => {
                                            mutationCandidateReset.mutate(candidate);
                                        }
                                    }
                            >
                                Pop - {candidate.name}
                            </Button>
                        </Box>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default CandidatesActions;
