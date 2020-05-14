import React, {useState, useContext, useEffect} from 'react'
import ChildContext from '../../context/child/childContext'
import GuardianContext from '../../context/guardian/guardianContext'
import Parents from './Parents'


const ParentForm = (props) => {
    const childContext = useContext(ChildContext)
    const guardianContext = useContext(GuardianContext)
    
    
    const { addParent, updateParent, children, parents, form } = guardianContext;
    
    console.log('Praent Form - children', children)
    // useEffect(() => {
    //     if(current !==null){
    //         setChild(current);
    //     } else {
    //         setChild({
    //             first_name:'',
    //             last_name: '',
    //             dob: '',
    //             type: 'birth'
    //         });
    //     }
    // }, [childContext,current]);

    const [parent, setParent] = useState({
        first_name:'',
        middle_name: '',
        last_name: '',
        suffix: '',
        spouse: false,
        deceased: false,
        birth_parent: true,
        adoptee_parent: false ,
        children: ''
    });

    const { first_name, middle_name, last_name, suffix, spouse, deceased, birth_parent, adoptee_parent} = parent;
    
    const onChange = e => {
        if(e.target.id ==='adoptee_parent' && e.target.value === 'true') {
            console.log('if adoptee true')
            setParent({...parent, children: children, birth_parent: false, adoptee_parent: true, [e.target.name]: e.target.value})
            
        }  
        else {
            console.log('else')
            setParent({...parent, children: children,  [e.target.name]: e.target.value})
        }
        if (e.target.name === 'spouse' && e.target.value === 'true') {
            console.log('if-spouse')
            setParent({...parent, spouse: true})
        }
        if (e.target.name === 'deceased' && e.target.value === 'true') {
            console.log('parent.deceased')
            setParent({...parent, deceased: true})
        }
        
    }

    const onSubmit = e => {
       
        console.log('Form-parent', parent)
        e.preventDefault();
        // if(current === null){
        //     addChild(child);
        // } else {
        //     updateChild(child);
        // }
        addParent(parent)
        
        setParent({
            first_name:'',
            middle_name: '',
            last_name: '',
            suffix: '',
            spouse: false,
            deceased: false,
            birth_parent: false,
            adoptee_parent: false           
        })
    };

    const addParentsToForm = () => {
        console.log('addParentsToForm')
        const parentIDs=parents.map(parent => {
            return parent._id
        })
        console.log('isnsideAddParentsToForm - parents', parentIDs)
        console.log('isnsideAddParentsToForm-form', form)
        updateParent(form, parentIDs)
        props.history.push('/limitations')

    }
    return(
        <>
        <div className='form-container'>
            <div className='form-header'>Guardianship Form</div>
            <div className='form-status-bar'>
                <div>Step 1</div>
                <div>Step 2</div>
                <div>Step 3</div>
                <div>Step 4</div>
            </div>
            <div>
                <button className='btn btn-light btn-block' onClick={addParentsToForm}>Continue</button>
            </div>
            <form onSubmit={onSubmit}>
                <h2 className='text-primary'>Parent Form</h2>
                <input type='text' placeholder='First Name' name='first_name' value={first_name} onChange={onChange} />
                <input type='text' placeholder='Middle Name' name='middle_name' value={middle_name} onChange={onChange} />
                <input type='text' placeholder='Last Name' name='last_name' value={last_name} onChange={onChange} />
                <input type='text' placeholder='Suffix' name='suffix' value={suffix} onChange={onChange} />
                               
                <input type='radio' id='spouse' name='spouse' value='true'  onChange={onChange}/>
                Spouse{' '}
                <input type='radio' id='deceased' name='deceased' value='true'  onChange={onChange}/>
                Deceased{' '}
                <input type='radio' id='birth_parent' name='birthparent' value='false' checked onChange={onChange}/>
                Birth Parent{' '}
                <input type='radio' id='adoptee_parent' name='birthparent' value='true'  onChange={onChange}/>
                Adoptee Parent{' '}
                <div>
                    <input type="submit" value="Add Parent" className='btn btn-primary btn-block'/>
                </div>
            </form>
        </div>
        <Parents />
        </>
    )
}

export default ParentForm