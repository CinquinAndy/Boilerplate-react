import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Button, Checkbox, Container, FormControl, FormControlLabel, Grid, Link, TextField} from '@mui/material';

import styles from './Auth.module.scss';
import {GetCandidate, Login} from "../../api/PocketBase";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        identity: data.get('identity'),
        password: data.get('password'),
    });
    Login().then(() => {
        GetCandidate().then(r => {
            console.log(r)
        });
    });
}

function Auth() {
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
                </Box>
            </Box>
        </Container>
    );
}

export default Auth;
