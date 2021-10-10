import React from 'react';
import { Link } from 'react-router-dom';
import initialAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css'


initialAuthentication()

const Login = () => {
    const {googleSignin} = useAuth()
    return (
        <div>
            <div className='mt-5 form-info'>
            <div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="mb-2 btn btn-primary">Login</button>
                <p>New user? <Link to='/register'>Create your account</Link></p>
                <br/>
                <button onClick={googleSignin} className='btn btn-outline-dark w-100'><i className="fab fa-google"></i> Google Signin</button>
                </div>
            </div>
        </div>
    );
};

export default Login;