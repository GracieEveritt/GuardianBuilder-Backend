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

    const divStyle = {
        background : '#6e00ff',
        color: 'white'
    }

    
    return(
        <div className='step-1'>
            <div className='status-bar'>
                <div className='form-header-status-bar'>Guardianship Form</div>
                <div className='form-status-bar'>
                    <div style={divStyle}>Children</div>
                    <div>Parents</div>
                    <div>Limits</div>
                    <div>Guardians</div>
                </div>
            </div>
            <div className='children'>
                <ChildForm {...props} />
                <Children />
            </div>
        </div>
    )
}

export default Guardianship