import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';

export default function App() {
  return <Layout>
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/shop/:id" component={() => <h1>Test</h1>} />
        </Switch>
    </Layout>	
}

