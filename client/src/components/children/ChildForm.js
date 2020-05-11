import React, {useState, useContext, useEffect} from 'react'
import ChildContext from '../../context/child/childContext'

const ChildForm = () => {
    const childContext = useContext(ChildContext)
    
    const {addChild, current, clearCurrent, updateChild } = childContext;

    useEffect(() => {
        if(current !==null){
            setChild(current);
        } else {
            setChild({
                first_name:'',
                last_name: '',
                dob: '',
                type: 'birth'
            });
        }
    }, [childContext,current]);

    const [child, setChild] = useState({
        first_name:'',
        last_name: '',
        dob: '',
        type: 'birth'
    });

    const { first_name, last_name, dob, type} = child;
    
    const onChange = e => setChild({ ...child, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addChild(child);
        } else {
            updateChild(child);
        }
        
        setChild({
            first_name:'',
            last_name: '',
            dob: '',
            type: 'birth'
        })
    };

    const clearAll = () => {
        clearCurrent();
    }
    return(
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Edit Child' : 'Add Child'}</h2>
            <input type='text' placeholder='First Name' name='first_name' value={first_name} onChange={onChange} />
            <input type='text' placeholder='Last Name' name='last_name' value={last_name} onChange={onChange} />
            <input type='date' placeholder='Date of Birth' name='dob' value={dob} onChange={onChange} />
            <h5>Child Type</h5>
            <input type='radio' name='type' value='birth' checked={type === 'birth'} onChange={onChange}/>
            Personal{' '}
            <input type='radio' name='type' value='adopted' checked={type === 'adopted'} onChange={onChange}/>
            Professional{' '}
            <div>
                <input type="submit" value={current? 'Edit Child': "Add Child"} className='btn btn-primary btn-block'/>
            </div>
            {current && <div>
                <button className='btn btn-light btn-block' onClick={clearAll}>Clear</button>
                </div>}
        </form>
    )
}

export default ChildForm