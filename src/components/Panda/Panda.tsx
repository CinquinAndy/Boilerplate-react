import React from 'react';
import {Button} from "@mui/material";
import styles from './Panda.module.scss'
import {useNavigate} from "react-router-dom";
import {IPandaProps} from "../../types/IPandaProps";



function Panda(props:IPandaProps) {
    const sectionStyle = {
        // Base from module in css, then override with props
        backgroundColor: props.backgroundColor
    }
    const navigate = useNavigate()

    // Render the component
    return (
        <div>
            <section className={`${styles.classTest}`} style={sectionStyle}>
                <div className={styles.button}>
                    <Button variant="contained"
                            onClick={() => {
                                navigate(-1);
                            }}
                    >Hello {props.title}</Button>
                </div>
                <div className={`${styles.entry} ${styles.pandaCub}`}></div>
            </section>
        </div>
    );
}

export default Panda;
