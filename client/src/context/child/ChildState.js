import React, { useReducer} from 'react';
import {v4 as uuid} from "uuid";
import ChildContext from './childContext'
import childReducer from './childReducer'
import {
    ADD_CHILD,
    DELETE_CHILD,
    SET_CURRENT,
    CLEAR_CURRENT, 
    UPDATE_CHILD,
    FILTER_CHILDREN,
    CLEAR_FILTER
} from '../types';

const ChildState = props => {
    const initialState = {
        children: [
            {
                "parents": [
                    "5eb82ada29b01a6c8366eb4c"
                ],
                "_id": "1",
                "first_name": "Sherry",
                "last_name": "Doe",
                "dob": "2020-01-17T07:00:00.000Z",
                "createdby": "5eb82ada29b01a6c8366eb4c"
            },
            {
                "parents": [
                    "5eb82ada29b01a6c8366eb4c"
                ],
                "_id": "2",
                "first_name": "Jack",
                "last_name": "Doe",
                "dob": "2020-01-17T07:00:00.000Z",
                "createdby": "5eb82ada29b01a6c8366eb4c"
            },
            {
                "parents": [
                    "5eb82ada29b01a6c8366eb4c"
                ],
                "_id": "3",
                "first_name": "Baby",
                "last_name": "Doe",
                "dob": "2020-01-17T07:00:00.000Z",
                "createdby": "5eb82ada29b01a6c8366eb4c"
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(childReducer, initialState);

    //Add child, 
    const addChild = child => {
        child._id = uuid;
        dispatch({type: ADD_CHILD, payload: child})
    }
    //Delete child
    const deleteChild = _id => {
        dispatch({type: DELETE_CHILD, payload: _id})
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
            addChild,
            deleteChild,
            setCurrent,
            clearCurrent,
            updateChild,
            filterChildren,
            clearFilter
        }}>
            {props.children}
        </ChildContext.Provider>
    )
};

export default ChildState
