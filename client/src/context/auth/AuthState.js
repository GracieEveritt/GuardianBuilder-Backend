import React, { useReducer} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        account: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Load User - what user is logged in
    // const loadAccount = () => console.log('loadAccount');
    //Register User 
    // const register = () => console.log('register');
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        try {
            console.log('register')
            // const res = await axios.post('/api/accounts', formData, config);
            // dispatch({
            //     type: REGISTER_SUCCESS,
            //     payload: res.data
            // })
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }
    //Login User -- log in user and get token
    // const login = () => console.log('login');
    //Logout -- destroy token
    // const logout = () => console.log('logout');
    //Clear errors
    // const clearErrors = () => console.log('clearErrors');
    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            account: state.account,
            error: state.error,
            // register,
            // loadAccount,
            // login,
            // logout,
            // clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState
