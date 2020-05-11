import React, {Fragment, useContext} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import ChildItem from './ChildItem'
import ChildContext from '../../context/child/childContext'


const Children = () => {
    const childContext = useContext(ChildContext);
    const {children, filtered} = childContext;

    if(children.length === 0){
        return <h4>Please add a child</h4>
    }

    return(
        <Fragment>
            <TransitionGroup>
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
            </TransitionGroup>
        </Fragment>
    )
}

export default Children