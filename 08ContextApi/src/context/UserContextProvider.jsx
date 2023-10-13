import React from 'react'
import UserContext from './userContext'
import PropTypes from 'prop-types' 

const UserContextProvider = ({props}) => {
    const [user , setUser ] = React.useState(null)
return (
    <UserContext.Provider value={{user , setUser} } >
        {props}
    </UserContext.Provider>
)
}

UserContextProvider.propTypes = {
    props: PropTypes.object.isRequired
}

export default UserContextProvider
