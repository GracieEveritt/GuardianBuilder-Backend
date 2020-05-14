import React, {useContext} from 'react';
import ChildForm from '../children/ChildForm'
import Children from '../children/Children'
import GuardianContext from '../../context/guardian/guardianContext'
import AuthContext from '../../context/auth/authContext'


const Guardianship = (props) => {
    const authContext = useContext(AuthContext)
    const guardianContext = useContext(GuardianContext)
    const {children, parents, guardians,  form, limitations} = guardianContext;
    const { account } = authContext;

    

    
    return(
        <div className='form-container'>
            <div className='form-header'>Guardianship Form</div>
            <div className='form-status-bar'>
                <div>Step 1</div>
                <div>Step 2</div>
                <div>Step 3</div>
                <div>Step 4</div>
            </div>
            <div className='form-inputs'>
                <ChildForm {...props} />
                <Children />
            </div>
        </div>
    )
}

export default Guardianship