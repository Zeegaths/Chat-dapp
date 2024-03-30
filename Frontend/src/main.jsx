import React from "react";
// import { navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";
import "./index.css";
import "./components/Header.jsx";
import "./components/RegisterUser.jsx"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ConnectPage from "./pages/ConnectPage.jsx";
import UserRegistration from "./pages/UserRegistration.jsx";
import Signup from "./pages/Signup.jsx";
import ChatPage from "./pages/ChatPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ConnectPage />,
    }, {
        path: "/signUp",
        element: <Signup />,
    },

    {
        path: "/UserProfile",
        element: <UserRegistration />,
    },
    {
        path: "/chat",
        element: <ChatPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Theme appearance="dark" accentColor="tomato">
            <RouterProvider router={router} />
        </Theme>
    </React.StrictMode>
);
