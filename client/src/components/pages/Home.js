import React from 'react'
import Children from '../children/Children'
import ChildForm from '../children/ChildForm'
import ChildrenFilter from '../children/ChildFilter'

const Home = () => {
    return(
        <div className="grid-2">
            <div>
                <ChildForm />
            </div>
            <div>
                <ChildrenFilter />
                <Children />
            </div>
        </div>
    )
}

export default Home