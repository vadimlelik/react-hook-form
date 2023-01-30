import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from "./providers/ThemeProvider";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // @ts-ignore
    <ThemeProvider>
        <App/>
    </ThemeProvider>
)
