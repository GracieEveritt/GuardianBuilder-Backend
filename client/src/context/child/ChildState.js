import React, { useReducer} from 'react';
import axios from 'axios';
// import {v4 as uuid} from "uuid";
import ChildContext from './childContext'
import childReducer from './childReducer'
import {
    ADD_CHILD,
    DELETE_CHILD,
    SET_CURRENT,
    CLEAR_CURRENT, 
    UPDATE_CHILD,
    FILTER_CHILDREN,
    CLEAR_FILTER,
    CHILD_ERROR,
    GET_CHILDREN,
    CLEAR_CHILDREN
} from '../types';

const ChildState = props => {
    const initialState = {
        children: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(childReducer, initialState);
    
    //Get children
    const getChildren = async () => {
        // child._id = uuid;
        try {
            const res = await axios.get('/api/child');
            dispatch({type: GET_CHILDREN, payload: res.data})
        } catch (err) {
            dispatch({type: CHILD_ERROR, payload: err.response.msg})
        }
        // dispatch({type: ADD_CHILD, payload: child})
    }


    //Add child, 
    const addChild = async child => {
        // child._id = uuid;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/child', child, config);
            dispatch({type: ADD_CHILD, payload: res.data})
        } catch (err) {
            dispatch({type: CHILD_ERROR, payload: err.response.msg})
        }
        // dispatch({type: ADD_CHILD, payload: child})
    }
    //Delete child
    const deleteChild = _id => {
        dispatch({type: DELETE_CHILD, payload: _id})
    }
    //Clear children
    const clearChildren = () => {
        dispatch({type: CLEAR_CHILDREN})
    }
    //Set Current child
    const setCurrent = child => {
        dispatch({type: SET_CURRENT, payload: child})
    }
    //Clear Current Child
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }
    //Update Child
    const updateChild = child => {
        dispatch({type: UPDATE_CHILD, payload: child})
    }
    //Filter Children
    const filterChildren = text => {
        dispatch({type:FILTER_CHILDREN, payload: text});
    };
    //Clear Filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }

    return (
        <ChildContext.Provider value={{
            children: state.children,
            current: state.current,
            filtered: state.filtered,
            error: state.error,
            addChild,
            deleteChild,
            setCurrent,
            clearCurrent,
            updateChild,
            filterChildren,
            clearFilter,
            getChildren,
            clearChildren
            
        }}>
            {props.children}
        </ChildContext.Provider>
    )
};

export default ChildState
