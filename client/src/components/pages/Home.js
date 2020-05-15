import React, { useContext, useEffect } from 'react'

import AuthContext from '../../context/auth/authContext';
import AuthState from '../../context/auth/AuthState';

const Home = (props) => {
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        authContext.loadAccount();
        //eslint-disable-next-line
    }, [])
    const reroute = () =>{
        props.history.push('/forms')
    }
    return(
        <div className='dashboard'>
            <h1>Welcome! Let's create a legal document!</h1>
            <button onClick={reroute} className='create-form-button btn btn-dark bt-sm'>Start New Form</button> 
        </div>

    )
}

export default Home