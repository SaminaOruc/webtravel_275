import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./TravelValidation";

function AddTravel(){
    const [values, setValues]=useState({
        title:'',
        description:'',
        type:'Europe'
    })

    const navigate=useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput=(event)=>{
        setValues((prev) =>({...prev, [event.target.name]: event.target.value}));
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.title==="" && errors.description===""){
            axios.post("http://localhost:8081/admin/add-travel", values)
            .then(res=>{
                console.log("Server response:", res.data);
                alert("Travel has been successfully created");
                navigate("/admin");
            })
            .catch(err=>console.log(err));
        }
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-warning vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Add Travel</h2>
                <Link to="/admin" className="btn btn-default border w-100 bg-light text-decoration-none">Go Back</Link>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="Enter Title" name="title"
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.title && <span className="text-danger">{errors.title}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">Description</label>
                        <input type="text" placeholder="Enter Description" name="description"
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.description && <span className="text-danger">{errors.description}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type">Choose travel type:</label>
                        <select name="type" onChange={handleInput} className="form-control rounded-0">
                            <option value="Europe">Europe</option>
                            <option value="Long Trips">Long Trips</option>
                            <option value="Summer">Summer</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success w-100">Add Travel</button>
                </form>
            </div>
        </div>
    )
}

export default AddTravel;