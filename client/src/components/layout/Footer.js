import React, {Fragment, useContext} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext';
import ChildContext from '../../context/child/childContext';

const Footer = ({ title, icon}) => {
    const authContext = useContext(AuthContext);
    const childContext = useContext(ChildContext);

    const { isAuthenticated, logout, account } = authContext;
    const { clearChildren } = childContext;

    const onLogout = () => {
        logout();
        clearChildren();
    }

    return(
        <div className="navbar bg-primary footer">
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                <Link to='/support'>Support</Link>
                </li>
                <li>
                    <Link to='/library'>Library</Link>
                </li>
            </ul>
        </div>
    );
};

Footer.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

Footer.defaultProps = {
    title: 'Guardian Builder',
    icon: 'fas fa-id-card-alt'
};

export default Footer;