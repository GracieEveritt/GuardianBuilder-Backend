import React, { useContext, useEffect } from 'react'

import AuthContext from '../../context/auth/authContext';
import AuthState from '../../context/auth/AuthState';

const Home = (props) => {
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        authContext.loadAccount();
        //eslint-disable-next-line
    }, [])

    return(
        <h1>Dashboard</h1>
    )
}

export default Home