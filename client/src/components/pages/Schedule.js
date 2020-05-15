import React from 'react'

const Schedule = () => {
    return(
        <div className='schedule'>
            <h1>Schedule</h1>
            <div className='schedule-div'>
                <p>Monday, April 5, 2020</p>
                <p>8:00am MST</p>
                <button className='btn btn-dark bt-sm'>Cancel</button>
            
            </div>
            <button className='schedule-button btn btn-dark bt-sm'>New Meeting</button>
        </div>
    )
}

export default Schedule