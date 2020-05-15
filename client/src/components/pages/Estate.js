import React from 'react'
import Children from '../children/Children'
import ChildForm from '../children/ChildForm'
import ChildrenFilter from '../children/ChildFilter'

const Estate = () => {
    return(
        <>
        <div>
            <h1>Estate</h1>
            {/* <p className="my-1">
                This is the Estate page.
            </p> */}
        </div>
            <div className="grid-2">
            <div>
                <ChildrenFilter />
                <Children />
                
            </div>
            <div>
                
                <ChildForm />
            </div>
        </div>
        </>
    )
}

export default Estate