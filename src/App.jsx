import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home-page'
import ShopPage from './pages/shop-page'
import Auth from './pages/auth'
import { auth, createUserProfileDocument } from './api/firebase'

export default function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged( async user => { 
      createUserProfileDocument(user)
      setUser(user)
    });
    return () => unsubsribe()
  })

  console.log(user, "CURRENT USER");

  return <Layout user={user}>
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/shop/:id" component={() => <h1>Test</h1>} />
          <Route path="/auth/" component={Auth} />
        </Switch>
    </Layout>	
}

