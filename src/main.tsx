import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Provider } from "react-redux";
import { createStore } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./providers/router/ErrorBoundary/ui/ErrorBoundary";

const store = createStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>
);
