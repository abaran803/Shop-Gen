import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { registerOwner, registerUser } from '../API/api';

const SignUpForm = (props) => {

    const history = useHistory();
    const [signupError, setSignupError] = useState();

    const [userName, setUserName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const ownerData = JSON.parse(localStorage.getItem('ownerData'));
    const ownerId = ownerData ? ownerData["_id"] : null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await (props.userLogin ? registerUser({ userName, mail, password }) : registerOwner({ userName, mail, password }));
        if (!data) {
            setSignupError(true);
            return "Data not Found, some error occured";
        }
        history.push({
            pathname: props.userLogin ? `/${ownerId}/loginUser` : "/login",
            state: { status: props.userLogin ? 'Signed Up Successfully!!! Login Here' : 'Shop Account Created Successfully!!! Go to Store' }
        });
    }

    return (
        <form className='w-25 mx-auto bg bg-light border px-4 py-4 my-5' onSubmit={handleSubmit}>
            {signupError && <div className={`alert alert-danger position-fixed my-2 mx-auto alert-dismissible fade ${signupError && 'show'}`} style={{ width: "98%", top: "0", left: "1%", zIndex: "99999", border: "1px solid black" }} role="alert">
                <strong>Please Try Again!!!</strong> Some error occured
                <button type="button" className="close" onClick={() => setSignupError(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
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
            <div className='mt-2' style={{ fontSize: "0.8rem" }}>Already a member! <Link to={props.userLogin ? `/${ownerId}/loginUser` : "/login"}>Login</Link></div>
        </form>
    )
}

export default SignUpForm