import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import ChildContext from '../../context/child/childContext'
import GuardianContext from '../../context/guardian/guardianContext'

const GuardianItem = ({guardian}) => {
    const childContext = useContext(ChildContext);
    const guardianContext = useContext(GuardianContext);
    
    // const {deleteChild, setCurrent, clearCurrent} = childContext;
    // const {parents, _id, first_name, last_name, dob, type, adopted, birth} = child;
    
    const {guardians, form} = guardianContext;

    const { children,married,spouse,relationToParent,first_name,middle_name,last_name,suffix,address, primary,rank,ifpredecease,ifdivorce} = guardian;
    
    // const onDelete = () => {
    //     deleteChild(_id);
    //     clearCurrent();
    // }

    return(
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {first_name} {last_name}{' '} 
                <span style={{float: 'right'}}
                className={'badge ' + (primary === 'true' ? 'badge-success' : 'badge-primary')
            }>
                {primary ? 'Primary' : 'Alternative'}
                </span>
            </h3> 
            {married ? <p>Spouse: {spouse}</p> : ''}
            {!primary ? 
                <span style={{float: 'right'}}
                    className={'badge ' + (primary === 'false' ? 'badge-success' : 'badge-primary')}>
                        Order: {rank} </span>
                : ''}
            <p>
                {/* <button onClick={() => setCurrent(child)} className='btn btn-dark bt-sm'>Edit</button>
                <button onClick={onDelete} className='btn btn-dark bt-sm'>Delete</button> */}
            </p> 
        </div>
    )
}

GuardianItem.propTypes ={
    guardian: PropTypes.object.isRequired
}

export default GuardianItem
