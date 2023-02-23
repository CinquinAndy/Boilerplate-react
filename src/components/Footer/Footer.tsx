import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import styles from './Footer.module.scss';

const Item = styled(Paper)(({theme}) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Footer() {
    return (
        <>
            <hr style={{
                margin:100
            }
            }/>
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item elevation={0}>item 1</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item elevation={0}>item 2</Item>
                </Grid>
                <Grid item xs>
                    <Item elevation={0}>item 3</Item>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default Footer;
