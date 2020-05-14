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

export default (state,action) => {
    switch(action.type) {
       
        case ADD_FORM:
            return {
                ...state,
                children: action.payload.children,
                form: action.payload._id,
                loading: false
            };
        case ADD_ACCOUNT:
            return {
                ...state,
                parents:  [...state.parents,action.payload],
            }
        case UPDATE_FORM:
            return {
                ...state,
                form: action.payload,
                loading: false
            }
        case GUARDIAN_ERROR:
        case FORM_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case ADD_PARENT:
            return {
                ...state,
                parents: [action.payload, ...state.parents],
                loading: false
            }
        case ADD_GUARDIAN:
            return {
                ...state,
                guardians: [...state.guardians, action.payload]
            }
        case PARENT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case GET_PARENT:
            return {
                ...state, 
                parents: action.payload,
                loading: false
            }
        default: 
            return state;
    }
}