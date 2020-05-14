import React, { useReducer, useContext } from 'react';
import axios from 'axios';
// import {v4 as uuid} from "uuid";
import GuardianContext from './guardianContext'
import guardianReducer from './guardianReducer'

import {
    ADD_FORM,
    FORM_ERROR,
    ADD_PARENT,
    PARENT_ERROR,
    GET_PARENT,
    ADD_ACCOUNT,
    UPDATE_FORM,
    ADD_GUARDIAN,
    GUARDIAN_ERROR
   
} from '../types';

const GuardianState = props => {
    
    // const { account } = authContext; 

    // console.log('guard state - account', account)
    const initialState = {
       children: null,
       form: null,
       account: null,
       parents: null,
       guardians: null,
       limitations: null,
       error: null,
       loading: null
    };

    const [state, dispatch] = useReducer(guardianReducer, initialState);
    
    //Add child, 
    const createGuardianForm = async (children, account) => {
        
        console.log('createForm -account', account)
        
        // child._id = uuid;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/forms', children, config);
            
            dispatch({type: ADD_FORM, payload: res.data, account:account})
            
           
        } catch (err) {
            dispatch({type: FORM_ERROR, payload: err.response.msg})
        }
        dispatch({type: ADD_ACCOUNT, payload: account})
    }
    const addParent = async (parent) => {
        console.log('State-addParent', parent)
 
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/parent', parent, config);
            console.log('parent-api-res.data', res.data)
            dispatch({type: ADD_PARENT, payload: res.data})
        } catch (err) {
            dispatch({type: PARENT_ERROR, payload: err.response.msg})
        }
    }
    const updateParent = async (form, parents) => {
       console.log('updateParents-form', form)
       console.log('updateParents-parents', parents)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/forms/${form}/parents`, parents, config);
            console.log('api-response-updateform', res.data)
            dispatch({type: UPDATE_FORM, payload: res.data})
        } catch (err) {
            dispatch({type: FORM_ERROR, payload: err.response.msg})
        }
    }
    const addLimitations = async (form, limitations) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        console.log('addLimitations', limitations)
        try {
            const res = await axios.put(`/api/forms/${form}/parents/limitations`, limitations,config);
            console.log('api-response-updateform', res.data)
            dispatch({type: UPDATE_FORM, payload: res.data})
        } catch (err) {
            dispatch({type: FORM_ERROR, payload: err.response.msg})
        }
    }
    const getParents = async () => {
        try {
            const res = await axios.get('/api/parent');
            dispatch({type: GET_PARENT, payload: res.data})
        } catch (err) {
            dispatch({type: PARENT_ERROR, payload: err.response.msg})
        }
    }

    const addGuardian = async (theguardian) => {
        console.log('State-addParent', theguardian)
 
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/guardian', theguardian, config);
            console.log('guardian-api-res.data', res.data)
            dispatch({type: ADD_GUARDIAN, payload: res.data})
        } catch (err) {
            dispatch({type: GUARDIAN_ERROR, payload: err.response.msg})
        }
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
            createGuardianForm,
            addParent,
            getParents,
            updateParent,
            addLimitations,
            addGuardian
        }}>
            {props.children}
        </GuardianContext.Provider>
    )
};

export default GuardianState
