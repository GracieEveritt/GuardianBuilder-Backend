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
        setCouple('no');
    };

    const addGuardiansToForm = () => {
       
        const guardianIDs=guardians.map(guardian => {
            return guardian._id
        })
 
        updateGuardian(form._id, guardianIDs)
        props.history.push('/draft')

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
                    <div >Parents</div>
                    <div>Limits</div>
                    <div style={divStyle}>Guardians</div>
                </div>
            </div>
            <div className='children'>   
                <div className='add-guardian-container'>
                <h2 className='text-primary'>Guardians</h2>
                <div>
                    <h3>Will this {count===1 ? 'first' : 'alternative'} guardian be a couple?</h3>
                    <form className='guardians-couple'>
                        <input type='radio' name='couple' value={couple} onClick={()=>setCouple('yes')}/><label>Yes</label>
                        <input type='radio' name='couple' value={couple} onClick={()=>setCouple('no')}/><label>No</label>
                    </form>
                </div>
                <form className='form-guardian' onSubmit={onSubmit}>
                    {/* <h2 className='text-primary'>Add Guardian</h2> */}
                    <input type='text' placeholder='First Name' name='first_name' value={first_name} onChange={onChange} />
                    <input type='text' placeholder='Middle Name' name='middle_name' value={middle_name} onChange={onChange} />
                    <input type='text' placeholder='Last Name' name='last_name' value={last_name} onChange={onChange} />
                    <input type='text' placeholder='Suffix' name='suffix' value={suffix} onChange={onChange} />
                    <div className='form-group guardians-address'>
                        <label>Address</label>
                        <input type='textarea' placeholder='Street Address' name='street' value={street} onChange={onChange} />
                        <input type='text' placeholder='City' name='city' value={city} onChange={onChange} />
                        <input type='text' placeholder='State' name='state' value={state} onChange={onChange} />
                        <input type='text' placeholder='Zip Code' name='zipcode' value={zipcode} onChange={onChange} />
                    </div>
                    <input type='text' placeholder='Relation to You' name='relationToParent' value={relationToParent} onChange={onChange} />                               
                    {couple === 'yes' ? 
                        <div className='guardian-add-spouse-form'>
                            <h3 className='guardian-add-spouse'>Add Spouse</h3>
                            <input type='text' placeholder="Spouse's First Name" name='spouse_first_name' value={spouse_first_name} onChange={onChange} />
                            <input type='text' placeholder="Spouse's Middle Name" name='spouse_middle_name' value={spouse_middle_name} onChange={onChange} />
                            <input type='text' placeholder="Spouse's Last Name" name='spouse_last_name' value={spouse_last_name} onChange={onChange} />
                            <input type='radio' id='predecease' name='predecease' value='true'  onChange={onChange}/>
                                Select if do not want the spouse to remain as guardian if this guardian predeceases that spouse.{' '}
                            <br></br>
                            <input type='radio' id='divorce' name='divorce' value='true'  onChange={onChange}/>
                                Select if you do not want this guardian to remain as guardian if this couple divorces. {' '}
                        </div> : ''}                
                    <div>
                        <input type="submit" value="Add Guardian" className='guardian-button btn btn-primary btn-block'/>
                    </div>
                    <div>
                        <button onClick={addGuardiansToForm} className='guardian-button btn btn-light btn-block' >Continue</button>
                    </div>
                </form>
                </div>
        <Guardians />
        </div>
        </div>
    )
}

export default GuardianForm