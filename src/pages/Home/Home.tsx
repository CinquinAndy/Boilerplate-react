import React from "react";
import {Button} from "@mui/material";
import styles from './Home.module.scss'

function Home() {
    return (
        <div>
            <section className={styles.classTest}>
                <div className={styles.button}>
                    <Button variant="contained">Hello Home</Button>
                </div>
                <div className={`${styles.entry} ${styles.pandaCub}`}></div>
            </section>
        </div>
    );
}

export default Home
