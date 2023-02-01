import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from "./providers/ThemeProvider";
import {Provider} from "react-redux";
import {createStore} from "./store/store";

const store = createStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </Provider>
);
