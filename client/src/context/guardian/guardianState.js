import React, { useReducer } from 'react';
import axios from 'axios';
// import {v4 as uuid} from "uuid";
import GuardianContext from './guardianContext'
import guardianReducer from './guardianReducer'
import {
    ADD_FORM,
    FORM_ERROR
   
} from '../types';

const GuardianState = props => {
    const initialState = {
       children: null,
       form: null,
       account: null,
       parents: null,
       guardians: null,
       limitations: null,
       error: null
    };

    const [state, dispatch] = useReducer(guardianReducer, initialState);
    
    //Add child, 
    const createGuardianForm = async children => {
        
        // child._id = uuid;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/forms', children, config);
            console.log('guardianState-api', res.data, res.data._id, res.data.createdby)
            dispatch({type: ADD_FORM, payload: res.data})
           
        } catch (err) {
            dispatch({type: FORM_ERROR, payload: err.response.msg})
        }
        // dispatch({type: ADD_CHILD, payload: child})
    }
   

    return (
        <GuardianContext.Provider value={{
            children: state.children,
            form: state.form,
            account: state.account,
            parents: state.parents,
            guardians: state.guardians,
            limitations: state.limitations,
            error: state.error,
            createGuardianForm
        }}>
            {props.children}
        </GuardianContext.Provider>
    )
};

export default GuardianState
