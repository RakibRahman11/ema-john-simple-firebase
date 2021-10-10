import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import initialAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

initialAuthentication()

const Header = () => {
    const {user, logout} = useAuth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.email ? <button onClick={logout}>Logout</button> :
                    <Link to="/login">Log In</Link>}
            </nav>
        </div>
    );
};

export default Header;