import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DashboardContext from "./context/Dashboard.jsx";
import { NextUIProvider } from "@nextui-org/react";
import ToastProvider from "./providers/ToastProvider.jsx";
import QueryProvider from "./providers/QueryProvider.jsx";
import PostContext from "./context/Post.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

// import 'rsuite/dist/rsuite.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ToastProvider />
      <NextUIProvider>
        <DashboardContext>
          <SocketContextProvider>
            <PostContext>
              <QueryProvider>
                <App />
              </QueryProvider>
            </PostContext>
          </SocketContextProvider>
        </DashboardContext>
      </NextUIProvider>
    </React.StrictMode>
  </BrowserRouter>
);
