import React from 'react'
import ReactDOM from 'react-dom/client'
import {ReactQueryDevtools} from 'react-query/devtools'
import styles from './styles/index.module.scss'
import Routes from "./routes/Routes";
import Header from "./components/global/Header/Header";
import Footer from "./components/global/Footer/Footer";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import {createTheme, ThemeProvider} from "@mui/material";

// Create a client
const queryClient = new QueryClient()

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
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                {/* The rest of your application */}
                <ReactQueryDevtools initialIsOpen={false}/>
                <Header/>
                <Routes/>
                <Footer/>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
