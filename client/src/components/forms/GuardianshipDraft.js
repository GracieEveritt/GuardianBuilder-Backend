import React, {useState, useContext, useEffect} from 'react'
import ChildContext from '../../context/child/childContext'
import GuardianContext from '../../context/guardian/guardianContext'
import AuthContext from '../../context/auth/authContext'
import moment from 'moment';

const GuadianshipDraft = (prop) => {

    const childContext = useContext(ChildContext)
    const guardianContext = useContext(GuardianContext)
    const authContext = useContext(AuthContext)

    const {children} = childContext
    const {parents, guardians, limitations} = guardianContext;

    console.log('children', children)
    console.log('parents', parents)
    console.log('guardians', guardians)
    console.log('limitations', limitations)

    const parentInfo = parents.map(parent => {
        return <span> {parent.first_name + ' ' + parent.middle_name + ' ' + parent.last_name} {parents.length>1 ? 'and' : ''} </span>
    })

    const childrenInfo = children.map(child => {
        return <span> {child.first_name + ' ' + child.last_name}, born {moment(child.dob, 'MMMM D YYYY', true)}, {children.length>1 ? 'and' : ''} </span>
    })

    const primaryGuardians = guardians.filter(guardian => {
        return guardian.primary === true
    })
    const alternativeGuardians = guardians.filter(guardian => {
        return guardian.primary !== true
    })

    const primaryGuardianList = primaryGuardians.map(guardian => {
        return(
            <div>
                <p>
                    `${guardian.first_name} ${guardian.middle_name} ${guardian.last_name}`, my {guardian.relationToParent},  
                    {guardian.spouse !== "  " ? guardian.spouse : ''}. 
                    {guardian.ifpredecease==='' ? '' : `In the event ${guardian.first_name} ${guardian.last_name} dies, ${parents.length>1 ? 'we' : 'I'} appoint the alternative guardian.`}
                    {guardian.ifdivorce==='' ? '' : `In the event of a divorce, ${parents.length>1 ? 'we' : 'I'} appoint the alternative guardian.`}
                </p>
                <p>Address: {guardian.address.street}, {guardian.address.city}, {guardian.address.state} {guardian.address.zipcode}</p>
                <br></br>
            </div>
        )
    })
    const alternativeGuardianList = alternativeGuardians.map(guardian => {
        return(
            <div>
                <p>
                    `${guardian.first_name} ${guardian.middle_name} ${guardian.last_name}`, my {guardian.relationToParent},  
                    {guardian.spouse !== "  " ? guardian.spouse : ''}. 
                    {guardian.ifpredecease==='' ? '' : `In the event ${guardian.first_name} ${guardian.last_name} dies, ${parents.length>1 ? 'we' : 'I'} appoint the alternative guardian.`}
                    {guardian.ifdivorce==='' ? '' : `In the event of a divorce, ${parents.length>1 ? 'we' : 'I'} appoint the alternative guardian.`}
                </p>
                <p>Address: {guardian.address.street}, {guardian.address.city}, {guardian.address.state} {guardian.address.zipcode}</p>
                <br></br>
            </div>
        )
    })
    

    return (
        <div className='draft draft-container'>
            <div className='draft draft-header'>APPOINTMENT OF GUARDIAN BY {parents.length>1 ? 'PARENTS' : 'PARENT'}</div>
            <div className='draft draft-p1'>
                <p>
                    {parents.length>1 ? 'WE' : 'I'}, {parentInfo}, 
                    pursuant to C.R.S. § 15-14-202, as amended to the date of 
                    the death of the undersigned, appoint the persons whose names appear below to serve as 
                    guardians for {parents.length>1 ? 'our' : 'my'} minor {children.length>1 ? 'children' : 'child'},  
                    {childrenInfo} at the time of our incapacity or death.
                </p>
                <p>
                    The appointment of the guardian(s) (including the alternate or successor) shall become 
                    effective upon our deaths, or upon an adjudication that we are incapacitated persons, 
                    or by a written determination by a physician who has examined us that we are no longer 
                    able to care for our children, whichever first occurs.
                </p>
                <p>
                    {limitations === '' ? '' : `The following are limitations on the powers the guardian(s) may otherwise exercise: ${limitations}`}
                </p>
                <p>
                    Our agent(s) under this instrument is hereby designated as a "Personal Representative" as defined by Public Law 104-191 and supporting CFRs, otherwise known as the Health Insurance Portability and Accountability Act of 1996, as amended, or HIPAA, Section 45 CFR 164.502(g). A "Personal Representative" may view our children's medical records, execute releases of confidential information from medical providers and insurers or other third parties, and shall be considered as a "personal representative" for health care disclosure under HIPAA. This authorization and consent to disclosure shall apply whether or not we continue to have the capacity to give informed consent, and is effective immediately upon signing of this instrument. We further consent to and direct covered entities to provide our children’s’ protected health information to a "personal representative" at any time upon the personal representative's request. 
                </p>
                <h3>GUARDIANS</h3>
                {primaryGuardianList}
                {alternativeGuardianList}
            </div>
            <div>
            STATE OF COLORADO            )
	                                     )ss.
            COUNTY OF SAN MIGUEL         )
            <p>The foregoing Appointment of Guardian by {parents.length>1 ? 'Parents' : 'Parent'} was acknowledged before me by
            {parentInfo}, and acknowledged before me by ____________________________________ and _____________________________________________, witnesses, 
            on _________________________, 2020.

            Witness my hand and official seal.
            My commission expires ________________.
	
            ____________________________________
	        Notary Public</p>
            </div>
        
        
        
        
        </div>
    
    
    
    
    
    )
}

export default GuadianshipDraft 