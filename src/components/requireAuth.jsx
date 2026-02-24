import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ApiRequestGet } from "../api/client";

// Wraps protected routes. Calls /me to verify the session via server-side DI.
// Renders children if authenticated, redirects to /login otherwise.
function ProtectedRoute({ children }) {
    const [status, setStatus] = useState("unauth"); // "loading" | "auth" | "unauth"

    useEffect(() => {
        ApiRequestGet("check_session")
            .then(res => {
                if (res.status === 200) setStatus("auth");
                else setStatus("unauth");
            })
            .catch(() => setStatus("unauth"));
    }, []);

    if (status === "unauth") return <Navigate to="/login" replace />;
    return children;
}

export default ProtectedRoute;
