import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import ChildContext from '../../context/child/childContext'
import GuardianContext from '../../context/guardian/guardianContext'

const ParentItem = ({parent}) => {
    const childContext = useContext(ChildContext);
    const guardianContext = useContext(GuardianContext);
    
    // const {deleteChild, setCurrent, clearCurrent} = childContext;
    // const {parents, _id, first_name, last_name, dob, type, adopted, birth} = child;
    
    const { first_name, middle_name, last_name, suffix, spouse, deceased, birth_parent, adoptee_parent} = parent;

    // const onDelete = () => {
    //     deleteChild(_id);
    //     clearCurrent();
    // }

    return(
        <div className='parent-card card bg-light'>
            <h3 className='text-primary text-left'>
                {first_name} {last_name}{' '} 
                <span style={{float: 'right'}}
                className={'badge ' + (spouse === 'true' ? 'badge-success' : 'badge-primary')
            }>
                {spouse ? 'Spouse' : ''}
                </span>
            </h3> 
            <p>
                {/* <button onClick={() => setCurrent(child)} className='btn btn-dark bt-sm'>Edit</button>
                <button onClick={onDelete} className='btn btn-dark bt-sm'>Delete</button> */}
            </p> 
        </div>
    )
}

ParentItem.propTypes ={
    parent: PropTypes.object.isRequired
}

export default ParentItem
