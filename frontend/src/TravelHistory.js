import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";

function TravelHistory(){
    const {id}=useParams();
    const [travelSignups, setTravelSignups] = useState(null);
    
    
    axios.defaults.withCredentials=true;

    useEffect(()=>{
        axios.get("http://localhost:8081/api/get-travel-signups/"+id)
        .then(response=>setTravelSignups(response.data))
        .catch(error=>console.error("Error fetching user information", error));
    }, [id]);

    if (!travelSignups){
        return <div>Loading...</div>;
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-warning">
            <div className="bg-white p-3 rounded w-100 m-5">
                <h1 className="text-center">Travel History</h1>
                <Link to={"/home"} className="btn btn-success border w-20 text-decoration-none">Go Back</Link>
                <div className="w-80 bg-white-rounded">
                {travelSignups.length === 0 ? (
                    <p>You haven't signed up for any travels.</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {travelSignups.map((data, i) => (
                                    <tr key={i}>
                                        <td>{data.title}</td>
                                        <td>{data.start_date}</td>
                                        <td>{data.end_date}</td>
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

export default TravelHistory;