import React, { useEffect, useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home-page'
import ShopPage from './pages/shop-page'
import Auth from './pages/auth'
import { auth, createUserProfileDocument } from './api/firebase'

function App({history}) {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged( async userAuth => { 
      const userRef = await createUserProfileDocument(userAuth)
      if (userAuth && user === null) {
        setUser(userAuth)

        userRef.onSnapshot(snapShot => setUser({
          id: snapShot.id,
          ...snapShot.data(),
        }))

        history.push('/');
      } 
    });
    return () => unsubsribe()
  },[user, history])

  console.log(user, "CURRENT USER");

  return <Layout user={user} setUser={setUser}>
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/shop/:id" component={() => <h1>Test</h1>} />
          <Route path="/auth/" component={Auth} />
        </Switch>
    </Layout>	
}

export default withRouter(App)