import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.scss'
import Routes from "./routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Header/>
        <Routes/>
        <Footer/>
    </React.StrictMode>,
)
