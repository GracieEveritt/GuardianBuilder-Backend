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

    //Load User

    //Register Account
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
       
        try {
            
            const api = axios.create({
                baseURL: "http://localhost:5000"
            });
            console.log('formData', formData)
            const res = await api.post('/api/accounts', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            });
        }
    }
    //Login User -- log in user and get token
  
    //Logout -- destroy token
  
    //Clear errors
  
    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            account: state.account,
            error: state.error,
            register
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
