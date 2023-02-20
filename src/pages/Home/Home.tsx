import React from "react";
import {Button} from "@mui/material";
import styles from './Home.module.scss'
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <section className={styles.classTest}>
                <div className={styles.button}>
                    <Button variant="contained"
                            onClick={() => {
                                navigate(-1);
                            }}
                    >Hello Home</Button>
                </div>
                <div className={`${styles.entry} ${styles.pandaCub}`}></div>
            </section>
        </div>
    );
}

export default Home
