import React from 'react';
import {Button} from "@mui/material";
import styles from './Candidates.module.scss'

function Candidates() {
    return (
        <div>
            <section className={styles.classTest}>
                <div className={styles.button}>
                    <Button variant="contained">Hello Candidates</Button>
                </div>
                <div className={`${styles.entry} ${styles.pandaCub}`}></div>
            </section>
        </div>
    );
}

export default Candidates;
