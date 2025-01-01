import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import router from "./Router/router.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <div className="max-w-screen-xl mx-auto">
                    <RouterProvider router={router} />
                </div>
            </AuthProvider>
        </HelmetProvider>
    </StrictMode>
);
