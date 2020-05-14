import React, { useContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import GuardianContext from '../../context/guardian/guardianContext'


const Limitations = (props) => {

    const guardianContext = useContext(GuardianContext)
    const { form, addLimitations } = guardianContext;
    console.log('liminatoins-form', form)

    const [limitations, setLimitations] = useState('');

       
    const onChange = e => {
        setLimitations( e.target.value )        
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log('formid', form._id)
        const limits = {limitations}
        addLimitations(form._id, limits)
        
        setLimitations("")
        props.history.push('/guardians')
    };

    return(
        
        <div className='form-container'>
            <div className='form-header'>Guardianship Form</div>
            <div className='form-status-bar'>
                <div>Step 1</div>
                <div>Step 2</div>
                <div>Step 3</div>
                <div>Step 4</div>
            </div>
            {/* <div>
                <button className='btn btn-light btn-block' onClick={addParentsToForm}>Continue</button>
            </div> */}
            <form onSubmit={onSubmit}>
                <h2 className='text-primary'>Limitations on Guardian's Powers</h2>
                <input type='textfield' placeholder='Add limitations' value={limitations} onChange={onChange} />
                
                <div>
                    <input type="submit" value="Add Limitations" className='btn btn-primary btn-block'/>
                </div>
            </form>
        </div>
    )  
}

export default Limitations