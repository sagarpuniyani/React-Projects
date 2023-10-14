import React from "react";
import PropTypes from "prop-types";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}


UserContextProvider.propTypes = {
    children: PropTypes.object.isRequired
}
export default UserContextProvider