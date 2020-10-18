import React, { useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/home-page'
import ShopPage from './pages/shop-page'
import Auth from './pages/auth'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './api/firebase'
import { setUser } from './redux/user/user.actions'

function App({history, user, setUser}) {

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged( async userAuth => { 
      const userRef = await createUserProfileDocument(userAuth)
      if (userAuth && user === null) {
        console.log(setUser, "FUCK")
        setUser(userAuth)

        userRef.onSnapshot(snapShot => setUser({
          id: snapShot.id,
          ...snapShot.data(),
        }))

        history.push('/');
      } 
    });
    return () => unsubsribe()
  },[user, history, setUser])

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

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
