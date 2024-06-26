import React from "react";
// import { navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Theme appearance="dark" accentColor="tomato">
            <App />
        </Theme>
    </React.StrictMode>
);
