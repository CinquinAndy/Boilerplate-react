import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './assets/css/index.module.scss'
import Routes from "./routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: styles.infotelBlue
        },
        secondary: {
            main: styles.infotelPurple
        },
        error: {
            main: styles.infotelRed
        },
        info: {
            main: styles.infotelCyan
        },
        warning: {
            main: styles.infotelOrange
        },
        success: {
            main: styles.infotelGreen
        }
    }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Header/>
            <Routes/>
            <Footer/>
        </ThemeProvider>
    </React.StrictMode>,
)
