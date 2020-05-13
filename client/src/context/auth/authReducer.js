import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    UPDATE_ACCOUNT,
    ACCOUNT_ERROR
} from '../types';

export default (state, action) => {

    switch(action.type) {
        
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                account: action.payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case UPDATE_ACCOUNT:
            console.log('reducer', state, action, action.type)
            return {
                ...state,
                
                // accounts: state.accounts.map(account => account._id === action.payload._id ? action.payload : account),
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                account: null,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        case ACCOUNT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    };
};