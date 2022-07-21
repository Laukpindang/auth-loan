import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './style.scss';

const LoginPage = () => {
    const navigate = useNavigate();
    const [payloadLogin, setPayloadLogin] = useState({});

    const handlechange = (e) => {
        setPayloadLogin({
            ...payloadLogin,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmitLogin = () => {
        axios.post('https://api.pinang-ritel.dev.rayain.net/api/authentication/login/', payloadLogin).then((res) => {
            const resData = res?.data?.data;
            localStorage.setItem('name', resData?.user?.full_name);
            localStorage.setItem('email', resData?.user?.email);
            localStorage.setItem('role', resData?.role[0]);
            localStorage.setItem('token', resData?.token);

            navigate('/dashboard')
        })
    };

    return (
    <div className="page">
        <div className="title"><h2>Login page</h2></div>
        <div className="content">
            <h3>Username</h3>
            <input type="text" placeholder="username" name="username" onChange={handlechange} /> <br /><br />
            <h3>Password</h3>
            <input type="password" placeholder="password" name="password" onChange={handlechange} /> <br /><br /><br />
            <button onClick={() => handleSubmitLogin()}>Login</button>
        </div>
    </div>
    )
};

export default LoginPage;