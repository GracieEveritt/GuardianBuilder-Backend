import React, {Fragment, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import FormItem from './formItem'
import ChildContext from '../../context/child/childContext'
import Spinner from '../layout/Spinner'
import GuardianContext from '../../context/guardian/guardianContext'


const MyForms = (props) => {
    const childContext = useContext(ChildContext);
    const {children, filtered, getChildren} = childContext;
    const guardianContext = useContext(GuardianContext);
    const {forms, parents, loading, getForms} = guardianContext;
  
    useEffect(()=>{
        getForms();
        //eslint-disable-next-line
    }, []);
    console.log('myForms=forms', forms)
    if(forms !== null && forms.length === 0 && !loading){
        return <Link to='/forms/'> <h4 className='please-add-form'>Please create a Form</h4></Link>
    }
    const reroute = () =>{
        props.history.push('/forms')
    }
    return(
        <Fragment>
            <button onClick={reroute} className='create-form-button btn btn-dark bt-sm'>Start New Form</button> 
            {forms !== null && !loading ? 
            (<TransitionGroup>
                {forms.map(form => (
                    // <h3>{contact.first_name}</h3>
                    <CSSTransition key={form._id} timeout={500} classNames='item'>
                        <FormItem form={form} />
                    </CSSTransition>
                ))}
            </TransitionGroup>) : <Spinner /> }
            
        </Fragment>
    )
}

export default MyForms