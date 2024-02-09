import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import { useParams, useNavigate } from "react-router-dom";
import './DatePickerStyles.css';

function TravelSignup(){
    const {id}=useParams();
    const [userInfo, setUserInfo] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    axios.defaults.withCredentials=true;
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        const user_id=userInfo.id;
        event.preventDefault();
        axios.post("http://localhost:8081/travel-signup/"+id, {startDate, endDate, user_id})
        .then(res=>{
            if (res.data==="OK"){
                alert("Travel signup has been successfully made");
                navigate(`/home`);
            }
            else{
                alert("Travel signup hasn't been made");
            }
        })
        .catch(err=>console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:8081/api/user")
            .then(response => setUserInfo(response.data))
            .catch(error => console.error("Error fetching user information", error));
    }, []);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-warning vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Choose dates for travel</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Start date:</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="mb-3">
                        <label>End date:</label>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-2">Signup Travel</button>
                </form>
            </div>
        </div>
    )
}

export default TravelSignup;