import React, { Component } from 'react';
import Directory from '../../components/directory';
import menu from '../../mock/menu.js';
import styles from './home-page.module.scss';

class HomePage extends Component {
  state = { data: menu }

  // use arrow functions to avoid binding

  render() {
    const { data } = this.state;
    return (
      <div className={styles["homepage"]}>
        <Directory data={data} />
      </div>
    )
  }

}

export default HomePage
