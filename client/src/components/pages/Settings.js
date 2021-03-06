import React from 'react'

const Settings = () => {
    return(
        <div className='settings'>
     
            <h1>Payment Settings</h1>
            <div className='settings-cards'>
                <div className='CC'>
                    <input type='radio' name='default' value='default' checked={true}/>
                    default{' '}
                    <h3>Mastercard 6888</h3>
                </div>
                <div>
                    <input type='radio' name='default' value='default' checked={false}/>
                    default{' '}
                    <h3>Visa 3111</h3>
                </div>
            </div>
            <div>
                <p>
                    <button className='btn btn-dark bt-sm'>Save</button>
                    <button className='btn btn-dark bt-sm'>Add New Card</button>
                </p> 
            </div> 
        </div>
    )
}

export default Settings