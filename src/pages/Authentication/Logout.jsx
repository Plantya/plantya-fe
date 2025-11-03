import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("token");
        ReactSession.remove("authUser");
        navigate("/login", { replace: true });
    }, [navigate]);

    return null;
};

export default Logout;
