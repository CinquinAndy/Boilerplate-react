import React, {useEffect, useState} from 'react';
import {useTheme} from "@mui/material/styles";

import {PocketFetchCandidate} from "../../../api/PocketBase";
import {Box, Grid} from '@mui/material';
import {useQuery, useQueryClient} from "react-query";
import {_KEY_candidates} from "../../../stores/ReactQuery_Keys";
import Candidate from "../../../components/CandidateList/CandidateList";


function CandidateView() {
    const queryClient = useQueryClient();
    const theme = useTheme();

    const invalidateQuery = (queryKey: string) => {
        queryClient.invalidateQueries({queryKey: [queryKey]});
    }


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
                            {Candidate({
                                id: candidate.id,
                                name: candidate.name,
                                email: candidate.email,
                                phone: candidate.phone,
                                description: candidate.description
                            })}
                        </Box>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default CandidateView;
