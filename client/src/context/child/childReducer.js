import {
    ADD_CHILD,
    DELETE_CHILD,
    SET_CURRENT,
    CLEAR_CURRENT, 
    UPDATE_CHILD,
    FILTER_CHILDREN,
    CLEAR_FILTER
} from '../types';

export default (state,action) => {
    switch(action.type) {
        case ADD_CHILD:
            return {
                ...state,
                children: [...state.children, action.payload]
            }
        case UPDATE_CHILD:
            return {
                ...state,
                children: state.children.map(child => child._id === action.payload._id ? action.payload : child)
            }
        case DELETE_CHILD:
            return {
                ...state,
                children: state.children.filter(child => child._id !== action.payload)
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
        default: 
            return state;
    }
}