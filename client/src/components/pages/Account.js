import React, {useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import { PromiseProvider } from 'mongoose';

const Account = (props) => {
    const authContext = useContext(AuthContext);

    const { account, updateAccount } = authContext; 
    console.log('account', account)

    useEffect(() => {
        if(account !==null){
            setEditAccount(account);
        } else {
            props.history.push('/')
        }
    }, [authContext,account]);

    const [editAccount, setEditAccount] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        email: '',
        phone: '',

    });
    const [editPassword, setEditPassword] = useState({
        password: '',
        password2: ''
    })

  

    const {first_name, middle_name,last_name,suffix,email,phone} = account;
    const {password, password2} = editPassword;

    const onChange = e => setEditAccount({...editAccount, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        
        updateAccount(account._id, editAccount);
        setEditAccount(email)
    };

    const onPasswordChange = e => setEditPassword({...editPassword, [e.target.name]: e.target.value});
    const onPasswordSubmit = e => {
        e.preventDefault();
        console.log('onPasswordSubmit')
    }




 
    
    return(
    <div className='form-container'>
            <h1 className="needs-color">myInfo</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' placeholder={first_name} name='first_name' value={editAccount.first_name} onChange={onChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='middle_name'>Middle Name</label>
                    <input type='text' placeholder={middle_name} name='middle_name' value={editAccount.middle_name} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' placeholder={last_name} name='last_name' value={editAccount.last_name} onChange={onChange}  />
                </div>
                <div className='form-group'>
                    <label htmlFor='suffix'>Suffix</label>
                    <input type='text' placeholder={suffix} name='suffix' value={editAccount.suffix} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder={email} name='email' value={editAccount.email} onChange={onChange}  />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' placeholder={phone} name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' value={editAccount.phone} onChange={onChange}  />
                </div>

                
                <input type='submit' value='Edit Account' className='btn btn-primary btn-block' />
            </form>
            <form onSubmit={onPasswordSubmit}>
            <div className='form-group'>
                    <label htmlFor='New Password'>New Password</label>
                    <input type='password' name='password' value={password} onChange={onPasswordChange}  minLength='6' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm New Password</label>
                    <input type='password' name='password2' value={password2} onChange={onPasswordChange}  minLength='6'/>
                </div>
                <input type='submit' value='Update Password' className='btn btn-primary btn-block' />
            </form>
            </div>
    )
}

export default Account