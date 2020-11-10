import React from 'react'

const withAuthentication  = WrappedCopponent => ({isAuthenticated, ...props}) => {
    if (!isAuthenticated) return <h1>Please signin to checkout</h1>   
    return <WrappedCopponent {...props} />
}

export default withAuthentication
