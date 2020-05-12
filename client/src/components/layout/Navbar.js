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
            <li>Hello {account && account.first_name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className='fas fa-sign-out-alt'></i> <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )

    return(
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}/> {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
                <li>
                    <Link to='/about'>About</Link>
                </li>

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
    icon: 'fas fa-id-card-alt'
};

export default Navbar;