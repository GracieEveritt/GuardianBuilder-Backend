import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import ChildContext from '../../context/child/childContext'
import GuardianContext from '../../context/guardian/guardianContext'

const FormItem = ({form}) => {
    const childContext = useContext(ChildContext);
    const guardianContext = useContext(GuardianContext);
    
    const {forms} = guardianContext;
    // const {parents, _id, first_name, last_name, dob, type, adopted, birth} = child;
    console.log('formsItem, form', form)
    // const { first_name, middle_name, last_name, suffix, spouse, deceased, birth_parent, adoptee_parent} = parent;

    // const onDelete = () => {
    //     deleteChild(_id);
    //     clearCurrent();
    // }

    return(
        <div className='myform-card parent-card card bg-light'>
            <h3 className='text-primary text-left'>Guardianship</h3>
            <h4>{form.draft ? "Draft" : "Final"}</h4>
            <h5>Created On: {form.created}</h5>
            <button className='btn btn-dark bt-sm'>Edit</button>         
            
        </div>
    )
}

FormItem.propTypes ={
    form: PropTypes.object.isRequired
}

export default FormItem
