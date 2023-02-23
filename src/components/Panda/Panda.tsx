import React from 'react';
import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import styles from './Panda.module.scss'
import {useNavigate} from "react-router-dom";
import {IPandaProps} from "../../types/IPandaProps";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";


function Panda(props: IPandaProps) {
    const theme = useTheme();
    const sectionStyle = {
        // Base from module in css, then override with props
        backgroundColor: props.backgroundColor ? props.backgroundColor : theme.palette.primary.main
    }
    const navigate = useNavigate()

    // Render the component
    return (
        <div>
            <section className={`${styles.classTest}`} style={sectionStyle}>

                <div className={styles.button}>
                    <Button variant="contained"
                            onClick={() => {
                                navigate(props.link ? props.link : "/")
                            }}
                    >Hello {props.title}</Button>
                </div>
                <div className={`${styles.entry} ${styles.pandaCub}`}></div>
                <Box sx={{
                    width: '100%',
                    height: 100,
                    pt:30,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button variant="contained" color={"error"}
                            onClick={() => {
                            // todo test change state & upload datas
                            }}
                    >Add +1</Button>

                </Box>
            </section>

        </div>
    );
}

export default Panda;
