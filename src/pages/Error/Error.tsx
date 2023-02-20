import React from 'react';
import styles from "./Error.module.scss";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Error() {
    const navigate = useNavigate()
    return (
        <div>
            <section className={styles.classTest}>
                <div className={styles.button}>
                    <Button variant="contained"
                            onClick={() => {
                                navigate(-1);
                            }}
                    >Hello Error</Button>
                </div>
                <div className={`${styles.entry} ${styles.pandaCub}`}></div>
            </section>
        </div>
    );
}

export default Error;
