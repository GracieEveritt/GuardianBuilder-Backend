import React, { useContext, useEffect } from 'react'
import Children from '../children/Children'
import ChildForm from '../children/ChildForm'
import ChildrenFilter from '../children/ChildFilter'
import AuthContext from '../../context/auth/authContext';
import AuthState from '../../context/auth/AuthState';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        authContext.loadAccount();
        //eslint-disable-next-line
    }, [])

    return(
        <div className="grid-2">
            <div>
                <ChildForm />
            </div>
            <div>
                <ChildrenFilter />
                <Children />
            </div>
        </div>
    )
}

export default Home