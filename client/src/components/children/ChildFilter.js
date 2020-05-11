import React, { useContext, useRef, useEffect } from 'react';
import ChildContext from '../../context/child/childContext';

const ChildFilter = () => {
    const childContext = useContext(ChildContext);
    const text = useRef('');
    const {filterChildren, clearFilter, filtered} = childContext;
    
    useEffect(()=>{
        if(filtered === null){
            text.current.value = '';
        }
    })
    const onChange = e => {
        if(text.current.value !==''){
            filterChildren(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Children..." onChange={onChange} />
        </form>
    )
}

export default ChildFilter