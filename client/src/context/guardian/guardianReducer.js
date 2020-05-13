import {
    ADD_FORM,
    FORM_ERROR

} from '../types';

export default (state,action) => {
    switch(action.type) {
       
        case ADD_FORM:
            return {
                ...state,
                children: [action.payload.children],
                form: action.payload._id,
                account: action.payload.createdby,
                parents: [action.payload.createdby],
                loading: false
            };
        case FORM_ERROR:
            return {
                ...state,
                error: action.payload
            };
        
        default: 
            return state;
    }
}