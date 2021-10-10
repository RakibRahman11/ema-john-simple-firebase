import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import initialAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

initialAuthentication()
const Register = () => {
    const {googleSignin} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_ui = location.state?.from || '/shop'
    const handleGoogleSignin = () =>{
        googleSignin()
        .then(result => {
            history.push(redirect_ui);
        })
    }
    return (
        <div>
            <div className='mt-5 form-info'>
                <form onSubmit="">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Re-enter Password</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    <button type="submit" className="mb-2 btn btn-primary">Register</button>
                    <p>Already have an account? <Link to='/login'>Login your account</Link></p>
                    <br />
                    <button onClick={handleGoogleSignin} className='btn btn-outline-dark w-100'><i className="fab fa-google"></i> Google Signin</button>
                </form>
            </div>
        </div>
    );
};

export default Register;