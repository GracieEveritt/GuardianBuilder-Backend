import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import ChildContext from '../../context/child/childContext'

const ChildItem = ({child}) => {
    const childContext = useContext(ChildContext);
    
    const {deleteChild, setCurrent, clearCurrent} = childContext;
    const {parents, _id, first_name, last_name, dob, type, adopted, birth} = child;
    
    const onDelete = () => {
        deleteChild(_id);
        clearCurrent();
    }
    console.log('childItem', child)
    return(
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {first_name} {last_name}{' '} 
                <span style={{float: 'right'}}
                className={'badge ' + (adopted === 'true' ? 'badge-success' : 'badge-primary')
            }>
                {adopted ? 'Adopted' : 'Birth'}
                </span>
            </h3> 
            <ul className='list'>
                {dob && (<li>
                    <i className='fas fa-envelope-open'></i> {dob}
                </li>)}
            </ul> 
            <p>
                <button onClick={() => setCurrent(child)} className='btn btn-dark bt-sm'>Edit</button>
                <button onClick={onDelete} className='btn btn-dark bt-sm'>Delete</button>
            </p> 
        </div>
    )
}

ChildItem.propTypes ={
    child: PropTypes.object.isRequired
}

export default ChildItem
