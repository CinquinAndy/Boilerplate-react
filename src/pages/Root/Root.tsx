import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {PocketCheckLogin} from "../../api/PocketBase";

function Root() {
    const isAuthenticated = PocketCheckLogin();

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            console.log("is not authenticated");
            navigate('/auth');
        } else {
            console.log("is authenticated");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div></div>
    );
}

export default Root;
