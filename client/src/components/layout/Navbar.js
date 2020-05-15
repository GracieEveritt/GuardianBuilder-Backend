import React, {Fragment, useContext} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext';
import ChildContext from '../../context/child/childContext';

const Navbar = ({ title, icon}) => {
    const authContext = useContext(AuthContext);
    const childContext = useContext(ChildContext);

    const { isAuthenticated, logout, account } = authContext;
    const { clearChildren } = childContext;

    const onLogout = () => {
        logout();
        clearChildren();
    }

    const authLinks = (
        <Fragment>
         <Link to='/forms'>   <li>Hello {account && account.first_name}</li></Link>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className='fas fa-sign-out-alt'></i> <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li className='nav-link'>
                <Link to='/register' className='nav-link'><span className='nav-link'>Register</span></Link>
            </li>
            <li>
                <Link to='/login' className='nav-link'>Login</Link>
            </li>
        </Fragment>
    )

    return(
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}/> &nbsp;&nbsp; {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    );
};

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

Navbar.defaultProps = {
    title: 'Guardian Builder',
    icon: 'fas fa-file-contract'
};

export default Navbar;