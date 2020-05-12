import React, {useState, useContext} from 'react';
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Register = () => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;

    const { register } = authContext;

    const [account, setAccount] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
    });

    const {first_name, middle_name,last_name,suffix,email,phone,password,password2} = account;

    const onChange = e => setAccount({...account, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(first_name === '' || phone === '' || email === '' || password === '' || last_name === '') {
            setAlert('Please enter all fields', 'danger');
        } else if(password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register();
            // register({
            //     first_name,
            //     middle_name,
            //     last_name,
            //     suffix,
            //     email,
            //     phone,
            //     password
            // })
        }
    };

    return (
        <div className='form-container'>
            <h1>Account <span className='text-primary'>Register</span></h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' name='first_name' value={first_name} onChange={onChange} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='middle_name'>Middle Name</label>
                    <input type='text' name='middle_name' value={middle_name} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' name='last_name' value={last_name} onChange={onChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='suffix'>Suffix</label>
                    <input type='text' name='suffix' value={suffix} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} onChange={onChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' value={phone} onChange={onChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange} required minLength='6' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input type='password' name='password2' value={password2} onChange={onChange} required minLength='6'/>
                </div>
                <input type='submit' value='Register' className='btn btn-primary btn-block' />
            </form>

        </div>
    );
};

export default Register;