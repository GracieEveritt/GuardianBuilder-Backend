import React, {useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
    
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext; 

    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/forms');
        }
        
        if(error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [account, setAccount] = useState({
        email: '',
        password: ''
    });

    const {email,password} = account;

    const onChange = e => setAccount({...account, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(email ==='' || password ==='') {
            setAlert('Please fill in all fields', 'danger')
        } else {
            login({
                email,
                password
            })
        }
    };

    return (
        <div className='login-form-container'>
            <h1>Account Login</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} onChange={onChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange} required />
                </div>
                <input type='submit' value='Login' className='btn btn-primary btn-block' />
            </form>

        </div>
    );
};

export default Login;