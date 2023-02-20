import React from 'react';
import {Button} from "@mui/material";
import styles from './Authentication.module.scss'

function Authentication() {
    return (
        <div>
            <section className={styles.classTest}>
                <div className={styles.button}>
                    <Button variant="contained">Hello Auth</Button>
                </div>
                <div className={`${styles.entry} ${styles.pandaCub}`}></div>
            </section>
        </div>
    );
}

export default Authentication;
