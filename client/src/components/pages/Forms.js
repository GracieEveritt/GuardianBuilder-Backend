import React from 'react'
import {Link} from 'react-router-dom'

const Forms = (props) => {
    return(
        <>
        <div className='myForm-h1'>
            <h1>Choose the form you want to create:</h1>
        </div>
        <div className='myForms'>
            
            <Link to='/guardianship'>
                <div className='myForms-div'>
                    <h2>Guardianship</h2>
                    <h6>Price: $50</h6>
                </div>
            </Link>
            <div className='myForms-div'>
                <h2>Conservatorship</h2>
                <h6>Price: $50</h6>
            </div>
            <div className='myForms-div'>
                <h2>Power of Attorney</h2>
                <h6>Price: $50</h6>
            </div>
            <div className='myForms-div'>
                <h2>Will</h2>
                <h6>Price: $150</h6>
            </div>
            <div className='myForms-div'>
                <h2>Trust</h2>
                <h6>Price: $250</h6>
            </div>
        </div>
        </>
    )
}

export default Forms