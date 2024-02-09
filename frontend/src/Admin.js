import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function Admin(){
    const [userInfo, setUserInfo] = useState(null);
    const [students, setStudents] = useState(null);
    const [travels, setTravels] = useState(null);

    axios.defaults.withCredentials=true;

    useEffect(() => {
        axios.get("http://localhost:8081/api/user")
            .then(response => setUserInfo(response.data))
            .catch(error => console.error("Error fetching user information", error));
    }, []);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/get-users")
        .then(response=>setStudents(response.data))
        .catch(error=>console.error("Error fetching users information", error));
    }, []);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/get-travels")
        .then(response=>setTravels(response.data))
        .catch(error=>console.error("Error fetching travels information", error));
    }, []);

    const handleStatusDeactivate=async(id)=>{
        try{
            await axios.put("http://localhost:8081/admin/deactivate/"+id);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    const handleStatusActivate=async(id)=>{
        try{
            await axios.put("http://localhost:8081/admin/activate/"+id);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }
    
    const handleDeleteTravel=async(id)=>{
        try{
            await axios.delete("http://localhost:8081/admin/delete-travel/"+id);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    if (!students) {
        return <div>Loading...</div>;
    }

    if (!travels){
        return <div>Loading...</div>;
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-warning">
            <div className="bg-white p-3 rounded w-100 m-5">
                <h1 className="text-center">Admin Dashboard</h1>
                <p className="text-center">Currently Logged in: {userInfo.nickname}</p>
                <div className="d-flex justify-content-center align-items-center">
                    <LogoutButton />
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <Link to="/add-user" className="btn btn-primary border w-10 text-decoration-none m-2">Add new User</Link>
                    <Link to="/add-travel" className="btn btn-primary border w-10 text-decoration-none m-2">Add new Travel</Link>
                </div>
                <div className="w-80 bg-white-rounded">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nickname</th>
                                <th>Email</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((data,i)=>(
                                    <tr key={i}>
                                        <td>{data.nickname}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <Link to={`update/${data.id}`} className="btn btn-success">Update</Link>
                                            {data.status==="ACTIVE" ? (
                                                <button className="btn btn-danger m-2" onClick={e=>handleStatusDeactivate(data.id)}>Deactivate</button>
                                            ) : (
                                                <button className="btn btn-danger m-2" onClick={e=>handleStatusActivate(data.id)}>Activate</button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className="text-center">All Travels:</h2>
                <div className="w-80 bg-white-rounded">
                {travels.length === 0 ? (
                    <p className="text-center">No travels create.</p>
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
                                            <Link to={`chosen-travel/${data.id}`} className="btn btn-info m-2">Enter</Link>
                                            <Link to={`update-travel/${data.id}`} className="btn btn-success m-2">Update</Link>
                                            <button className="btn btn-danger m-2" onClick={e => handleDeleteTravel(data.id)}>Delete</button>
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

export default Admin;