import React, {Fragment, useContext, useEffect } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import ParentItem from './ParentItem'
import ChildContext from '../../context/child/childContext'
import Spinner from '../layout/Spinner'
import GuardianContext from '../../context/guardian/guardianContext'


const Parents = () => {
    const childContext = useContext(ChildContext);
    const {children, filtered, getChildren} = childContext;
    const guardianContext = useContext(GuardianContext);
    const {getParents, parents, loading} = guardianContext;
  
    useEffect(()=>{
        getParents();
        //eslint-disable-next-line
    }, []);

    if(parents !== null && parents.length === 0 && !loading){
        return <h4>Please add a parent</h4>
    }

    return(
        <Fragment>
            {parents !== null && !loading ? 
            (<TransitionGroup>
                {parents.map(parent => (
                    // <h3>{contact.first_name}</h3>
                    <CSSTransition key={parent._id} timeout={500} classNames='item'>
                        <ParentItem parent={parent} />
                    </CSSTransition>
                ))}
            </TransitionGroup>) : <Spinner /> }
            
        </Fragment>
    )
}

export default Parents