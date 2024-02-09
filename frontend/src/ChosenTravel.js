import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ChosenTravel(){
    const {id}=useParams();
    const [travel, setTravel] = useState(null);
    const [questions, setQuestions] = useState(null);

    useEffect(()=>{
        axios.get("http://localhost:8081/get-travel/"+id)
        .then(response=>setTravel(response.data[0]))
        .catch(error=>console.error("Error fetching travel information", error));
    }, [id]);

    useEffect(()=>{
        axios.get("http://localhost:8081/travel-questions/"+id)
        .then(response=>setQuestions(response.data))
        .catch(error=>console.error("Error fetching questions information", error));
    }, [id]);

    if(!travel){
        return <div>Loading...</div>;
    }

    if(!questions){
        return <div>Loading...</div>;
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-warning">
            <div className="bg-white p-3 rounded w-80 m-5">
                <Link to={"/home"} className="btn btn-default border w-100 bg-light text-decoration-none">Go Back</Link>
                <h1>Travel Details</h1>
                <h2>Title: {travel.title}</h2>
                <p>Description: {travel.description}</p>
                <p>Type: {travel.type}</p>
                <Link to={`add-question/${id}`} className="btn btn-success">Add Question</Link>
                <h2>Questions:</h2>
                {questions.length === 0 ? (
                    <p>No questions available.</p>
                ) : (
                        questions.map((data, i) => (
                        <div key={i}>
                            <p>Question ID: {data.id}</p>
                            <p>{data.content}</p>
                            <p>Made by: {data.nickname}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default ChosenTravel;