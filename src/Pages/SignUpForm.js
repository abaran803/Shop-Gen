import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerOwner, registerUser } from '../API/api';

const SignUpForm = (props) => {

    const [userName, setUserName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await (props.userLogin ? registerUser({userName, mail, password}) : registerOwner({userName, mail, password}));
        if(!data) {
            return console.log("Data not Found, some error occured");
        }
    }

    return (
        <form className='w-25 mx-auto bg bg-light border px-4 py-4 my-5' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <div className='mt-2' style={{fontSize: "0.8rem"}}>Already a member! <Link to={props.userLogin ? "/loginUser" : "/login"}>Login</Link></div>
        </form>
    )
}

export default SignUpForm