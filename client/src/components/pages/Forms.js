import React from 'react'
import {Link} from 'react-router-dom'

const Forms = (props) => {
    return(
        <>
        <div>
            <h1>Choose the forms you want to create</h1>
        </div>
        <Link to='/guardianship'>
            <div>
                <h2>Guardianship</h2>
                <h6>Price: $50</h6>
            </div>
        </Link>
        <div>
            <h2>Conservatorship</h2>
            <h6>Price: $50</h6>
        </div>
        <div>
            <h2>Power of Attorney</h2>
            <h6>Price: $50</h6>
        </div>
        <div>
            <h2>Will</h2>
            <h6>Price: $150</h6>
        </div>
        <div>
            <h2>Trust</h2>
            <h6>Price: $250</h6>
        </div>
        </>
    )
}

export default Forms