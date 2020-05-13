import React, {Fragment, useContext} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext';
import ChildContext from '../../context/child/childContext';

const Sidebar = ({ title, icon}) => {
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
            <li>
                <Link to='/account'>myInfo</Link>
            </li>
            <li>
                <Link to='/forms'>myForms</Link>
            </li>
            <li>
                <Link to='/estate'>myEstate</Link>
            </li>
            <li>
                <Link to='/schedule'>myMeetings</Link>
            </li>
            <li>
                <Link to='/charge'>Settings</Link>
            </li>

        </Fragment>
    )

    return(
        <div className="navbar bg-primary">
            <ul>
                {isAuthenticated ? authLinks : ''}
                
            </ul>
        </div>
    );
};

Sidebar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

Sidebar.defaultProps = {
    title: 'Guardian Builder',
    icon: 'fas fa-id-card-alt'
};

export default Sidebar;