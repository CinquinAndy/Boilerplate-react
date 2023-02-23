import React from 'react';
import Panda from "../../components/Panda/Panda";
import {useTheme} from "@mui/material/styles";

import {FetchCandidate} from "../../api/PocketBase";
import {useQuery, useQueryClient} from "react-query";
import {ICandidate} from "../../types/ICandidate";

function Candidates() {
    const theme = useTheme();

    // Access the client

    const queryClient = useQueryClient()
// Queries
    const query = useQuery('candidates', FetchCandidate)

    return (
        <div>
            <Panda backgroundColor={theme.palette.success.main} title={"Candidates page"} link={"/pouet"}/>
            <div>
                {query.isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {query?.data?.map((candidate) => (
                            <div key={candidate.id}>
                                <div>{candidate.name}</div>
                                <div>{candidate.email}</div>
                                <div>{candidate.phone}</div>
                                <div>{candidate.description}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Candidates;
