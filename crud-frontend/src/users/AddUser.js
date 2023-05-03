import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/")


    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-1'> Register User</h2>
                    <form action="" onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className='form-label'>Name</label>
                            <input type={"text"} name="name" className='form-control' id="" placeholder='Enter Name' value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className='form-label'>Username</label>
                            <input type={"text"} name="username" className='form-control' id="" placeholder='Enter Username' value={username} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className='form-label'>Email</label>
                            <input type={"email"} name="email" className='form-control' id="" placeholder='Enter Email' value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button className='btn btn-success' type='submit'>Submit</button>
                        <Link className='btn btn-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
