import {
    ADD_CHILD,
    GET_CHILDREN,
    CLEAR_CHILDREN,
    DELETE_CHILD,
    SET_CURRENT,
    CLEAR_CURRENT, 
    UPDATE_CHILD,
    FILTER_CHILDREN,
    CLEAR_FILTER,
    CHILD_ERROR
} from '../types';

export default (state,action) => {
    switch(action.type) {
        case GET_CHILDREN:
            return {
                ...state, 
                children: action.payload,
                loading: false
            }
        case ADD_CHILD:

            return {
                ...state,
                children: [action.payload, ...state.children],
                loading: false
            }
        case UPDATE_CHILD:
            return {
                ...state,
                children: state.children.map(child => child._id === action.payload._id ? action.payload : child),
                loading: false
            }
        case DELETE_CHILD:
            return {
                ...state,
                children: state.children.filter(child => child._id !== action.payload),
                loading: false
            }
        case CLEAR_CHILDREN:
            return {
                ...state,
                children: null,
                filtered: null,
                error: null,
                current: null
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case FILTER_CHILDREN:
            return {
                ...state,
                filtered: state.children.filter(child => {
                    const regex = new RegExp(`${action.payload}`,'gi');
                    return child.last_name.match(regex) || child.first_name.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case CHILD_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default: 
            return state;
    }
}