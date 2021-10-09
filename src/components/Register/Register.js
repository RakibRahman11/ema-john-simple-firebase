import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='mt-5 form-info'>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" required />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Re-enter Password</label>
                        <input type="password" class="form-control" id="password" required />
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Register</button>
                    <p>Already have an account? <Link to='/login'>Login your account</Link></p>
                    <br />
                    <button className='btn btn-outline-dark w-100'><i class="fab fa-google"></i> Google Signin</button>
                </form>
            </div>
        </div>
    );
};

export default Register;