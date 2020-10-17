import React from 'react'
import { Route } from "react-router-dom";
import SignIn from './signin';
import SignUp from './signup';

export default function Auth() {
    return <div>
        <Route path="/auth/signin" exact component={SignIn} />
        <Route path="/auth/signup" exact component={SignUp} /> 
    </div>
}
