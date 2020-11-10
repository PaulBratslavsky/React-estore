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
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import {  selectProductIsFetching } from './redux/products/products.selector'


import CategoryPage from './pages/category-page'
import { fetchProductsStartAsync } from './redux/products/products.actions'

function App({user, setUser, isFetching, fetchProductsStartAsync }) {

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

  useEffect(() => {
    fetchProductsStartAsync()
  },[fetchProductsStartAsync])

  return <Layout user={user} setUser={setUser}>
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact render={ (props) => <ShopPage isFetching={isFetching} {...props}/>} />
          <Route path="/shop/:categoryID" exact render={ (props) => <CategoryPage isFetching={isFetching} {...props}/>} />
          <Route path="/checkout"  exact render={ (props) => <CheckoutPage isAuthenticated={user} {...props}/>} />
          <Route path="/auth" render={() => user ? <Redirect to="/" /> : <Auth />} />
        </Switch>
    </Layout>	
}


const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  isFetching: selectProductIsFetching
})

export default withRouter(connect(mapStateToProps, { setUser, fetchProductsStartAsync })(App))
