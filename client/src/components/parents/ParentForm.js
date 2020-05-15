import React, {useState, useContext, useEffect} from 'react'
import ChildContext from '../../context/child/childContext'
import GuardianContext from '../../context/guardian/guardianContext'
import Parents from './Parents'


const ParentForm = (props) => {
    const childContext = useContext(ChildContext)
    const guardianContext = useContext(GuardianContext)
    
    
    const { addParent, updateParent, children, parents, form } = guardianContext;
    
   
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
        
            setParent({...parent, children: children, birth_parent: false, adoptee_parent: true, [e.target.name]: e.target.value})
            
        }  
        else {
           
            setParent({...parent, children: children,  [e.target.name]: e.target.value})
        }
        if (e.target.name === 'spouse' && e.target.value === 'true') {
            
            setParent({...parent, spouse: true})
        }
        if (e.target.name === 'deceased' && e.target.value === 'true') {
            
            setParent({...parent, deceased: true})
        }
        
    }

    const onSubmit = e => {
       
        
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
       
        const parentIDs=parents.map(parent => {
            return parent._id
        })
      
        updateParent(form, parentIDs)
        props.history.push('/limitations')

    }
    const divStyle = {
        background : '#6e00ff',
        color: 'white'
    }
    return(
        <div className='step-1'>
            <div className='status-bar'>
                <div className='form-header-status-bar'>Guardianship Form</div>
                <div className='form-status-bar'>
                    <div>Children</div>
                    <div style={divStyle}>Parents</div>
                    <div>Limits</div>
                    <div>Guardians</div>
                </div>
            </div>
        <div className='children'>  
            <form className='form-child' onSubmit={onSubmit}>
                <h2 className='text-primary'>Add Parent</h2>
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
                <div>
                <button className='continue btn btn-light btn-block' onClick={addParentsToForm}>Continue</button>
                </div>
            </form>
        
        <Parents />
        </div>
        </div>
    )
}

export default ParentForm