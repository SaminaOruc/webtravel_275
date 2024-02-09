import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GuestHome(){
    const [travels, setTravels] = useState(null);

    axios.defaults.withCredentials=true;

    useEffect(()=>{
        axios.get("http://localhost:8081/api/get-travels")
        .then(response=>setTravels(response.data))
        .catch(error=>console.error("Error fetching user information", error));
    }, []);

    if (!travels) {
        return <div>Loading...</div>;
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-warning">
            <div className="bg-white p-3 rounded w-100 m-5">
                <h1 className="text-center">Welcome to the Travel Agency</h1>
                <p className="text-center">Hello, Guest</p>
                <div className="d-flex justify-content-center align-items-center">
                    <Link to={"/"} className="btn btn-primary m-2">Login</Link>
                </div>
                <h2 className="text-center">All Travel Offers:</h2>
                <div className="w-80 bg-white-rounded">
                {travels.length === 0 ? (
                <p className="text-center">No travel offers available.</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Manage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {travels.map((data, i) => (
                                    <tr key={i}>
                                        <td>{data.title}</td>
                                        <td>{data.description}</td>
                                        <td>{data.type}</td>
                                        <td>
                                            <Link to={`/chosen-travel-guest/${data.id}`} className="btn btn-info m-2">Enter</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GuestHome;