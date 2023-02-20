import React from 'react';
import {Button} from "@mui/material";
import styles from './Candidates.module.scss'
import {useNavigate} from "react-router-dom";

function Candidates() {
    const navigate = useNavigate()
    return (
        <div>
            <section className={styles.classTest}>
                <div className={styles.button}>
                    <Button variant="contained"
                            onClick={() => {
                                navigate(-1);
                            }}
                    >Hello Candidates</Button>
                </div>
                <div className={`${styles.entry} ${styles.pandaCub}`}></div>
            </section>
        </div>
    );
}

export default Candidates;
