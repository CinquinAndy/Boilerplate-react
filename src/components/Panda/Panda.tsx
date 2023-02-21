import React from 'react';
import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import styles from './Panda.module.scss'
import {useNavigate} from "react-router-dom";
import {IPandaProps} from "../../types/IPandaProps";
import {useTheme} from "@mui/material/styles";



function Panda(props:IPandaProps) {
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
            </section>
        </div>
    );
}

export default Panda;
