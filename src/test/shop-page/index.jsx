import React, { Component } from 'react';
import styles from './shop-page.module.scss';
import shop from '../../mock/shop';
import PreviewCollection from '../../components/collection-preview';

export default class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = { collections: shop };
    }

    render() {
        console.log(shop)
        return <div className={styles['shoppage']}>
            <h1>Shop Page</h1>
            <PreviewCollection />
        </div>
    }   
}

