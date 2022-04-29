import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginOwner, loginUser, registerOwner } from '../API/api';

const LoginForm = (props) => {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await (props.userLogin ? loginUser({ mail, password }) : loginOwner({ mail, password }))
        if (!data) {
            return console.log("Data not Found, some error occured");
        }
        if (props.userLogin) {
            localStorage.setItem('userData', JSON.stringify(data));
        } else {
            localStorage.setItem('ownerData', JSON.stringify(data));
        }
        props.setLoginStatus(true);
    }

    const handleMail = (e) => { setMail(e.target.value) }

    const handlePassword = (e) => { setPassword(e.target.value) }

    return (
        <form className='w-25 mx-auto bg bg-light border px-4 py-4 my-5' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={mail} onChange={handleMail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={handlePassword} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <div className='mt-2' style={{ fontSize: "0.8rem" }}>Not a {props.userLogin ? 'user' : 'member'}! <Link to={props.userLogin ? "/signupUser" : "/signup"}>Sign Up</Link></div>
        </form>
    )
}

export default LoginForm