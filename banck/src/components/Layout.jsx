import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({navTo}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token") && !localStorage.getItem("user")) navigate('/login')
    }, [])
}

export default Layout