import React, {useState, useContext, useEffect} from 'react'
import ChildContext from '../../context/child/childContext'
import GuardianContext from '../../context/guardian/guardianContext'
import Guardians from './Guardians'


const GuardianForm = (props) => {
    const childContext = useContext(ChildContext)
    const guardianContext = useContext(GuardianContext)
    
    
    const { children, form, addGuardian, guardians, updateGuardian } = guardianContext;
    
   

    const [guardian, setGuardian] = useState({
        first_name:'',
        middle_name: '',
        last_name: '',
        suffix: '',
        married: '',
        relationToParent: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        spouse_first_name: '',
        spouse_middle_name: '',
        spouse_last_name: '',
        predecease: '',
        divorce : ''
    });

    const [count, setCount] = useState(1);
    const [couple,setCouple] = useState('')
    
   

    const { first_name,middle_name, last_name, suffix, street, city, state, zipcode, married, relationToParent, spouse_first_name, spouse_middle_name, spouse_last_name,predecease, divorce} = guardian;
        
    const onChange = e => {
        if (couple==='yes'){
            setGuardian({...guardian, married: true, [e.target.name] : e.target.value})
        } else {
        setGuardian({...guardian, married: false, [e.target.name] : e.target.value})}
    }

    const onSubmit = e => {
        e.preventDefault();
        let primary = true
        if (count>1){
            primary = false
        } 
        const rank = count
        
        // console.log('count', count)
        // console.log('Form-guardian', guardian)
        
        const address = {
            street: street, 
            city: city, 
            state: state, 
            zipcode: zipcode
        }
        
        
        const theguardian = {
            children : children,
            married: married,
            spouse : (spouse_first_name + ' ' + spouse_middle_name + ' ' + spouse_last_name),
            relationToParent: relationToParent,
            first_name:first_name,
            middle_name: middle_name,
            last_name: last_name,
            suffix: suffix,
            address: address,
            primary: primary,
            rank: rank,
            ifpredecease: predecease,
            ifdivorce : divorce
        }
        // console.log('theguardian', theguardian)
        addGuardian(theguardian)
        setCount(count => count +1)
        setGuardian({
            first_name:'',
            middle_name: '',
            last_name: '',
            suffix: '',
            married: '',
            relationToParent: '',
            street: '',
            city: '',
            state: '',
            zipcode: '',
            spouse_first_name: '',
            spouse_middle_name: '',
            spouse_last_name: '',
            predecease: '',
            divorce : ''          
        })
    };

    const addGuardiansToForm = () => {
       
        const guardianIDs=guardians.map(guardian => {
            return guardian._id
        })
 
        updateGuardian(form._id, guardianIDs)
        props.history.push('/draft')

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
                    <button onClick={addGuardiansToForm} className='btn btn-light btn-block' >Continue</button>
                </div>
                <h2 className='text-primary'>Guardians</h2>
                <div>
                    <h3>Will this {count===1 ? 'first' : 'alternative'} guardian be a couple?</h3>
                    <form>
                        <input type='radio' name='couple' value={couple} onClick={()=>setCouple('yes')}/><label>Yes</label>
                        <input type='radio' name='couple' value={couple} onClick={()=>setCouple('no')}/><label>No</label>
                    </form>
                </div>
                <form onSubmit={onSubmit}>
                    <h2 className='text-primary'>Add Guardian</h2>
                    <input type='text' placeholder='First Name' name='first_name' value={first_name} onChange={onChange} />
                    <input type='text' placeholder='Middle Name' name='middle_name' value={middle_name} onChange={onChange} />
                    <input type='text' placeholder='Last Name' name='last_name' value={last_name} onChange={onChange} />
                    <input type='text' placeholder='Suffix' name='suffix' value={suffix} onChange={onChange} />
                    <div>
                        <label>Address</label>
                        <input type='textarea' placeholder='Street Address' name='street' value={street} onChange={onChange} />
                        <input type='text' placeholder='City' name='city' value={city} onChange={onChange} />
                        <input type='text' placeholder='State' name='state' value={state} onChange={onChange} />
                        <input type='text' placeholder='Zip Code' name='zipcode' value={zipcode} onChange={onChange} />
                    </div>
                    <input type='text' placeholder='Relation to You' name='relationToParent' value={relationToParent} onChange={onChange} />                               
                    {couple === 'yes' ? 
                        <div>
                            <h3>Add Spouse</h3>
                            <input type='text' placeholder="Spouse's First Name" name='spouse_first_name' value={spouse_first_name} onChange={onChange} />
                            <input type='text' placeholder="Spouse's Middle Name" name='spouse_middle_name' value={spouse_middle_name} onChange={onChange} />
                            <input type='text' placeholder="Spouse's Last Name" name='spouse_last_name' value={spouse_last_name} onChange={onChange} />
                            <input type='radio' id='predecease' name='predecease' value='true'  onChange={onChange}/>
                                Select if your guardian predeceases the spouse, do you still want the spouse to remain as guardian? {' '}
                            <br></br>
                            <input type='radio' id='divorce' name='divorce' value='true'  onChange={onChange}/>
                                Select if this couple divorces, do you still want the now single guardian to remain as guardian? {' '}
                        </div> : ''}                
                    <div>
                        <input type="submit" value="Add Guardian" className='btn btn-primary btn-block'/>
                    </div>
                </form>
            </div>
        <Guardians />
        </>
    )
}

export default GuardianForm