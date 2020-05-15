import React from 'react'
import male from './male.jpg'
import female from './woman.jpg'
import woman from './woman2.jpg'



const About = () => {
    return(
        <div className='about'>
            <div className='about-us'>
                <h1>About Us</h1>
                <p className="my-1">
                    We are a boutique law firm of three lawyers who specialize in estate planning, real estate and business transactions.
                </p>
            </div>
            <h1>Who We Are</h1>
            <div className='who'>
                
                <div>
                    <img src={woman} style={{width: '150px',  margin: 'auto', display: 'block '}}
                        alt='Linda Smith' />
                    <h3>Bob Jones</h3>
                    <p>Estate Planning</p>
                </div>
                <div>
                    <img src={female} style={{width: '170px',height: '120px', margin: 'auto', display: 'block '}}
                        alt='Sherry Jones' />
                    <h3>Sherry Jones</h3>
                    <p>Family Law</p>
                </div>
            </div>
        </div>
    )
}

export default About