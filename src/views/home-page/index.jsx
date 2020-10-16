import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Directory from '../../components/directory';
import data from '../../mock/data.js';
import styles from './home-page.module.scss';

class HomePage extends Component {
  state = { data: data }

  componentDidMount() {
    console.log('fetch someting')
  }

  // use arrow functions to avoid binding

  render() {
    const { data } = this.state;
    return (
      <div className={styles["homepage"]}>		
        <Switch>
          <Route path="/" exact render={(props) =><Directory {...props} data={data} />} />
          <Route path="/:id" component={() => <h1>Test</h1>} />
        </Switch>	
      </div>
    )
  }

}

export default HomePage
