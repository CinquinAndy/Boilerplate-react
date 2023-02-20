import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.scss'
import Routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Routes/>
    </React.StrictMode>,
)
