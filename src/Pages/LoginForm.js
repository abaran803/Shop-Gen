import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { loginOwner, loginUser, registerOwner } from '../API/api';

const LoginForm = (props) => {

    const location = useLocation();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState();
    const [loginError, setLoginError] = useState();
    const ownerData = JSON.parse(localStorage.getItem('ownerData'));
    const ownerId = ownerData ? ownerData["_id"] : null;

    useEffect(() => {
        setLoginSuccess(location.state ? location.state.status : false);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await (props.userLogin ? loginUser({ mail, password }) : loginOwner({ mail, password }))
        if (!data) {
            setLoginError(true);
            return "Data not Found, some error occured";
        }
        if (props.userLogin) {
            localStorage.setItem('userData', JSON.stringify(data));
        } else {
            localStorage.setItem('ownerData', JSON.stringify(data));
        }
        props.setLoginStatus(true);
    }

    const handleDemoLogin = async (e) => {
        e.preventDefault();
        const data = await (props.userLogin ? loginUser({ mail: process.env.REACT_APP_USER_DEMO_ID, password: process.env.REACT_APP_USER_DEMO_PWD }) : loginOwner({ mail: process.env.REACT_APP_DEMO_ID, password: process.env.REACT_APP_DEMO_PWD }))
        if (!data) {
            setLoginError(true);
            return "Data not Found, some error occured";
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
        <form className='mx-auto bg bg-light border px-4 py-4 mx-auto my-5' onSubmit={handleSubmit} style={{ width: "95%", maxWidth: "320px" }}>
            {loginSuccess && <div className={`alert alert-success position-fixed my-2 mx-auto alert-dismissible fade ${loginSuccess && 'show'}`} style={{ width: "98%", top: "0", left: "1%", zIndex: "99999", border: "1px solid black" }} role="alert">
                {location.state && location.state.status}
                <button type="button" className="close" onClick={() => setLoginSuccess(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
            {loginError && <div className={`alert alert-danger position-fixed my-2 mx-auto alert-dismissible fade ${loginError && 'show'}`} style={{ width: "98%", top: "0", left: "1%", zIndex: "99999", border: "1px solid black" }} role="alert">
                Some error occured!!! Please try again
                <button type="button" className="close" onClick={() => setLoginError(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={mail} onChange={handleMail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={handlePassword} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="submit" className="btn btn-success mx-2" onClick={handleDemoLogin}>Demo Login</button>
            <div className='mt-2' style={{ fontSize: "0.8rem" }}>Not a {props.userLogin ? 'user' : 'member'}! <Link to={props.userLogin ? `/${ownerId}/signupUser` : "/signup"}>Sign Up</Link></div>
        </form>
    )
}

export default LoginForm