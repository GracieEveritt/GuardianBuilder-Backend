import React, { useContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import GuardianContext from '../../context/guardian/guardianContext'


const Limitations = (props) => {

    const guardianContext = useContext(GuardianContext)
    const { form, addLimitations } = guardianContext;
 

    const [limitations, setLimitations] = useState('');

       
    const onChange = e => {
        setLimitations( e.target.value )        
    }

    const onSubmit = e => {
        e.preventDefault();
       
        const limits = {limitations}
        addLimitations(form._id, limits)
        
        setLimitations("")
        props.history.push('/guardians')
    };
    const divStyle = {
        background : '#6e00ff',
        color: 'white'
    }
    return(
        
        <div className='limitations form-container'>
            <div className='limits-status-bar'>
                <div className='form-header-status-bar'>Guardianship Form</div>
                <div className='form-status-bar'>
                    <div>Children</div>
                    <div >Parents</div>
                    <div style={divStyle}>Limits</div>
                    <div>Guardians</div>
                </div>
            </div>
            {/* <div>
                <button className='btn btn-light btn-block' onClick={addParentsToForm}>Continue</button>
            </div> */}
            <form className="the-limits" onSubmit={onSubmit}>
                <h2 className='text-primary'>Limitations on Guardian's Powers</h2>
                <input className='limits-form' type='textfield' placeholder='Type limitations here.' value={limitations} onChange={onChange} />
                
                <div>
                    <input className='limits-button' type="submit" value="Add Limitations" className='btn btn-primary btn-block'/>
                </div>
            </form>
        </div>
    )  
}

export default Limitations