import React, { useEffect } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home-page'
import ShopPage from './pages/shop-page'
import CheckoutPage from './pages/checkout-page'
import Auth from './pages/auth'
import { connect } from 'react-redux'
import { auth, database, createUserProfileDocument, convertCollectionSnapshot } from './api/firebase'
import { setUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'

import CategoryPage from './pages/category-page'
import { setProducts } from './redux/products/products.actions'

function App({user, setUser, setProducts }) {

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

    const unsubsribe = database
      .collection('collections')
      .onSnapshot(snapshot => {
        setProducts(convertCollectionSnapshot(snapshot))
      })

    return () => unsubsribe()
  })

  return <Layout user={user} setUser={setUser}>
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/shop/:categoryID" exact component={CategoryPage} />
          <Route path="/checkout"  exact render={ (props) => <CheckoutPage isAuthenticated={user} {...props}/>} />
          <Route path="/auth" render={() => user ? <Redirect to="/" /> : <Auth />} />
        </Switch>
    </Layout>	
}


const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
})

// const mapDispatchToProps = dispatch => ({
//   setUser: user => dispatch(setUser(user)),
//   setProducts: products => dispatch(setProducts(products))
// })

export default withRouter(connect(mapStateToProps, { setUser, setProducts })(App))
