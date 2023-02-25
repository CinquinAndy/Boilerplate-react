import React, {useEffect} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Button, Checkbox, Container, FormControl, FormControlLabel, Grid, Link, TextField} from '@mui/material';

import styles from './Auth.module.scss';
import {PocketFetchCandidate, PocketLogin, PocketLogout} from "../../api/PocketBase";
import {IAuth} from "../../types/IAuth";
import {useNavigate} from "react-router-dom";



function Auth(){
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const logs: IAuth = {
            identity: data.get('identity') as string,
            password: data.get('password') as string,
        }

        await PocketLogin(logs);
        setShouldRedirect(true);
    }

    // should redirect state flag
    const [shouldRedirect, setShouldRedirect] = React.useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (shouldRedirect) {
            navigate('/candidates');
        }
    },[shouldRedirect])

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{mt: 1}}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="identity"
                        label="Email Address"
                        name="identity"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color={"warning"}
                        sx={{mt: 3, mb: 2}}
                        onClick={() => {
                            PocketLogout().then(() => {
                                console.log('Logged out')
                            });
                        }
                        }
                    >
                        Logout
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Auth;
