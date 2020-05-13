import React, {useState, useContext, useEffect} from 'react'
import ChildContext from '../../context/child/childContext'
import GuardianContext from '../../context/guardian/guardianContext'

const ParentForm = (props) => {
    const childContext = useContext(ChildContext)
    const guardianContext = useContext(GuardianContext)
    
    const {addChild, current, clearCurrent, updateChild, children } = childContext;
    // const {createGuardianForm} = guardianContext;

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
        adopted: '',
        birth: ''
    });

    const { first_name, last_name, dob, type, birth, adopted} = child;
    
    const onChange = e => {
        console.log('e', e.target)
        if(e.target.name ==='type' && e.target.value === 'adopted') {
            console.log('test', )
            setChild({...child, adopted: true, birth: false, [e.target.name]: e.target.value})
        } else {
        setChild({ ...child, [e.target.name]: e.target.value })
        }

    }

    const onSubmit = e => {
        console.log('onSubmit - child', child)
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
            adopted: '',
            birth: ''            
        })
    };

    const clearAll = () => {
        clearCurrent();
    }

    const createGuardian = () => {
        
        const childrenIDs=children.map(child => {
            return child._id
        })
        console.log('insidecreateGuardian - children', childrenIDs)
        guardianContext.createGuardianForm(childrenIDs)

    }
    return(
        <>
        <div>
            <button className='btn btn-light btn-block' onClick={createGuardian}>Continue</button>
        </div>
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>Parent Form</h2>
            <input type='text' placeholder='First Name' name='first_name' value={first_name} onChange={onChange} />
            <input type='text' placeholder='Last Name' name='last_name' value={last_name} onChange={onChange} />
            <h5>Date of Birth</h5>
            <input type='date' placeholder='Date of Birth' name='dob' value={dob} onChange={onChange} />
            
            <input type='radio' name='type' value='birth' checked={type === 'birth'} onChange={onChange}/>
            Birth{' '}
            <input type='radio' name='type' value='adopted' checked={type ==='adopted'} onChange={onChange}/>
            Adopted{' '}
            <div>
                <input type="submit" value={current? 'Edit Child': "Add Child"} className='btn btn-primary btn-block'/>
            </div>
            {current && <div>
                <button className='btn btn-light btn-block' onClick={clearAll}>Clear</button>
                </div>}
        </form>
        </>
    )
}

export default ParentForm