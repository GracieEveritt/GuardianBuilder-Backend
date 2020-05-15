import React, {Fragment, useContext, useEffect } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import GuardianItem from './GuardianItem'
import ChildContext from '../../context/child/childContext'
import Spinner from '../layout/Spinner'
import GuardianContext from '../../context/guardian/guardianContext'


const Guardians = () => {
    const childContext = useContext(ChildContext);
    const {children, filtered, getChildren} = childContext;
    const guardianContext = useContext(GuardianContext);
    const {guardians, loading} = guardianContext;
    
    useEffect(()=>{
        // getParents();
        //eslint-disable-next-line
    }, []);

    if(guardians !== null && guardians.length === 0 && !loading){
        return <h4 classNmae='please-add'>Please add a guardian</h4>
    }

    return(
        <Fragment>
            {guardians !== null && !loading ? 
            (<TransitionGroup>
                {guardians.map(guardian => (
                    // <h3>{contact.first_name}</h3>
                    <CSSTransition key={guardian._id} timeout={500} classNames='item'>
                        <GuardianItem guardian={guardian} />
                    </CSSTransition>
                ))}
            </TransitionGroup>) : <Spinner /> }
            
        </Fragment>
    )
}

export default Guardians