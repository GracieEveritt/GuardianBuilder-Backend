import React, {Fragment, useContext, useEffect } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import ChildItem from './ChildItem'
import ChildContext from '../../context/child/childContext'
import Spinner from '../layout/Spinner'



const Children = () => {
    const childContext = useContext(ChildContext);
    const {children, filtered, getChildren, loading} = childContext;
   
    useEffect(()=>{
        getChildren();
        //eslint-disable-next-line
    }, []);

    if(children !== null && children.length === 0 && !loading){
        return <h4 className='please-add'>Please add a child</h4>
    }

    return(
        <Fragment className='child-cards'>
            {children !== null && !loading ? (<TransitionGroup>
                {filtered !==null ? 
                filtered.map(child => (
                    <CSSTransition key={child._id} timeout={500} classNames='item'>
                        <ChildItem child={child} />
                    </CSSTransition>
                )) : 
                children.map(child => (
                    // <h3>{contact.first_name}</h3>
                    <CSSTransition key={child._id} timeout={500} classNames='item'>
                        <ChildItem child={child} />
                    </CSSTransition>
                ))}
            </TransitionGroup>) : <Spinner /> }
            
        </Fragment>
    )
}

export default Children