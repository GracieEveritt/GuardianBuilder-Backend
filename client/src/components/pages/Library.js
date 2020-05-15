import React from 'react'

const Library = () => {
    return(
        <>
        <div>
            <h1>Library Page</h1>
        </div>
        <div className='dict'>
        <div>
            <h4>Guardianship</h4>
            <p>Legal document that appoints a perons to make decisions on behalf of someone else.</p>
        </div>
        <div>
            <h4>Conservatorship</h4>
            <p>Legal document that appoints a person to manage an incapacitated person or minor's financial and personal affairs. The conservator's duties include overseeing finances, establishing and monitoring the physical care of the conservatee or ward, and managing living arrangements.</p>
        </div>
        <div>
            <h4>Power of Attorney</h4>
            <p>Legal document that gives a person (the agent or attorney-in-fact) the power to act for another person (the principal). The agent can have broad legal authority or limited authority to make legal decisions about the principal's property, finances or medical care.</p>
        </div>
        <div>
            <h4>Will</h4>
            <p>Written instrument legally executed by which a person makes disposition of his or her estate to take effect after death.</p>
        </div>
        </div>
        </>
    )
}

export default Library