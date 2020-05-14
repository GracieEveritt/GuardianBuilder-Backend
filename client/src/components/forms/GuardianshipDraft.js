import React, {useState, useContext, useEffect} from 'react'
import ChildContext from '../../context/child/childContext'
import GuardianContext from '../../context/guardian/guardianContext'
import AuthContext from '../../context/auth/authContext'

const GuadianshipDraft = (prop) => {

    const childContext = useContext(ChildContext)
    const guardianContext = useContext(GuardianContext)
    const authContext = useContext(AuthContext)



    return <div>Guardianship Document</div>
}

export default GuadianshipDraft 