import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Home from '@mui/icons-material/Home'
import HomeWork from '@mui/icons-material/HomeWorkSharp'
import Login from '@mui/icons-material/Login'

import styles from './Header.module.scss';
import {Logout} from "@mui/icons-material";
import {PocketLogout} from "../../api/PocketBase";
import {useNavigate} from "react-router-dom";

export default function Header() {
    // const navigate = useNavigate();

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                        onClick={
                            () => {
                                window.location.href = '/candidates';
                            }
                        }
                    >
                        <Home/>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                    >
                        <HomeWork/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        ARHI
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                        onClick={
                            () => {
                                console.log('Login')
                                // navigate('/auth');
                            }
                        }
                    >
                        <Login/>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                        onClick={() => {
                            PocketLogout().then(() => {
                                    console.log('Logged out')
                                }
                            )
                        }}
                    >
                        <Logout/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
