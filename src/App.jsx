import React, { useEffect } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home-page'
import ShopPage from './pages/shop-page'
import CheckoutPage from './pages/checkout-page'
import Auth from './pages/auth'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './api/firebase'
import { setUser } from './redux/user/user.actions'
import CategoryPage from './pages/category-page'

function App({user, setUser}) {

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged( async userAuth => { 
      const userRef = await createUserProfileDocument(userAuth)
      if (userAuth && user === null) {
        setUser(userAuth)

        userRef.onSnapshot(snapShot => setUser({
          id: snapShot.id,
          ...snapShot.data(),
        }))
      } 
    });
    return () => unsubsribe()
  },[user, setUser])

  return <Layout user={user} setUser={setUser}>
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/shop/:categoryID" exact component={CategoryPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route path="/auth" render={() => user ? <Redirect to="/" /> : <Auth />} />
        </Switch>
    </Layout>	
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
