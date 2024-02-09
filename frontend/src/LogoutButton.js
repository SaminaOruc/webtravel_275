import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogoutButton(){

    const navigate=useNavigate();

    const handleLogout=()=>{
        try {
            axios.get('http://localhost:8081/logout');
            console.log('Logout successful');
            navigate("/");
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    }

    return(
        <button onClick={handleLogout} className="btn btn-danger m-2">Logout</button>
    )
}

export default LogoutButton;